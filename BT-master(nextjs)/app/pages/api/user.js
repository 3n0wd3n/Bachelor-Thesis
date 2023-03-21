import User from '../../models/User'
import Lecture from '../../models/Lecture'
import Homeworks from '../../models/Homeworks'
import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const filterHomeworks = async(userDb, homeworkIds, admin) => {
  const homeworksDb = await findAllFromMongo(Homeworks, { _id: homeworkIds });

  const homeworks = homeworksDb.map(homework => ({
    id: homework._id,
    title: homework.title,
    description: homework.description,
    date: homework.createdAt
  }));

  return homeworks
}

const filterLessons = async (lessonIds, admin) => {
  // getting array of lessons from database
  const lessonsDb = await findAllFromMongo(Lecture, { $and: [{ _id: lessonIds }, { status: 'waiting' }] });

  // format lessons
  const lessons = lessonsDb.map(lesson => ({
    id: lesson._id,
    status: lesson.status,
    date: lesson.from,
    // fucking destruktivnost => ...
    ... (admin ? { endDate: lesson.to } : [])
  }));

  let now = new Date().getTime();
  const filteredLessons = await Promise.all(
    lessons.filter(async lesson => {
      const lessonDate = new Date(lesson.to).getTime();
      if (now > lessonDate) {
        // update status
        await UpdateOneFromMongo(Lecture, { _id: lesson.id }, { status: "done" })
        return false
      } else return true
    })
  )

  return filteredLessons
}

export const getUser = async(filter) => {
  const userDb = await findOneFromMongo(User, filter)
  // this is responsible for hiding when admin decide that it is no longer wanted to be seen, but still stays in database
  if (!userDb || userDb.disabled) return;
  
  if (userDb.role === 'admin') return getAdmin(userDb);
  else return getStudent(userDb);
}

const createUser = (data) => {
  return User(data).save()
}

const createLecture = (data) => {
  return Lecture(data).save()
}

const getStudent = async (userDb, admin=false) => {
  const filteredLessons = await filterLessons(userDb.lectures, admin);
  const filteredHomeworks = await filterHomeworks(userDb, userDb.homeworks, admin);

  return {
    id: userDb._id,
    role: userDb.role,
    firstName: userDb.name,
    lastName: userDb.surname,
    username: userDb.username, /* Zeptat se kubu na bezpečnost*/
    password: userDb.password, /* Zeptat se kubu na bezpečnost*/
    legalRepresentative: userDb.legalRepresentative !== '',
    lessons: filteredLessons,
    plan: userDb.plan,
    // homeworks: userDb.homeworks,
    homeworks: filteredHomeworks,
    files: [],
    wordList: userDb.wordList,
    payments: [],
  }
}

const getAdmin = async (userDb) => {
  const studentsDb = (await findAllFromMongo(User, { role: 'student' })).filter(student => !student.disabled)
  const filteredStudents = await Promise.all(studentsDb.map(async student => await getStudent(student, true)));

  return {
    id: userDb._id,
    role: userDb.role,
    firstName: userDb.name,
    lastName: userDb.surname,
    students: filteredStudents,
    post: [],
  }
}

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    // http://localhost:3000/api/user
    case 'GET':
      const { userCookie } = query;
      
      const userData = await getUser({ _id: userCookie })

      res.status(200).json( userData );
      break;
    case 'PUT':
      // getting data from login about user
      const { userName, userNumber, userPassword } = body;

      let user;
      // find user in collection if exists
      if (userNumber) user = await getUser({ phone: userNumber, password: userPassword })
      else user = await getUser({ username: userName, password: userPassword })

      // return null or object to login
      res.status(200).json( user );
      break;
    case 'POST':
      try {
        const {
          role,
          name,
          surname,
          username,
          password,
          representativeName,
          representativeSurname,
          representativePhone,
          representativePassword,
          lectures,
          plan,
        } = body;
        const legalRepresentative = representativeName.length > 0;
        let representative;
        let student;

        if (legalRepresentative) {
          representative = await createUser({
            role: 'representative',
            name: representativeName,
            surname: representativeSurname,
            phone: representativePhone,
            password: representativePassword,
          });
          student = await createUser({
            role,
            name,
            surname,
            username,
            password,
            plan,
            legalRepresentative: representative._id
          });
        } else {
          student = await createUser({
            role,
            name,
            surname,
            username,
            password,
            plan,
          });
        }

        lectures.forEach(async (lecture) => {
          const lectureDb = await createLecture({
            from: lecture.from,
            to: lecture.to,
            studentId: student._id,
          });

          await UpdateOneFromMongo(User, { _id: student._id }, { $push: { lectures: lectureDb._id } })
        });
        // TODO: probrat s Trnečkou
        if (legalRepresentative) await UpdateOneFromMongo(User, { _id: representative._id }, { child: student._id })

        
        res.status(200).json({ data: 'updated data' });
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    default:
      break;
  }
}
