import bcrypt from 'bcrypt'
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
    date: lesson.from,
    // destruktivnost => ...
    ... (admin ? { endDate: lesson.to } : []),
    ... (admin ? { changes: lesson.changes } : []),
    ... (admin ? { statuses: lesson.statuses } : []),
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
  
  filteredLessons.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).reverse()

  return filteredLessons
}

export const getUser = async(filter, password) => {
  const usersDb = await findAllFromMongo(User, filter)
  let userDb = usersDb[0]
  if (password) {
    await Promise.all(
      usersDb.map(async (user) => {
        if (user && await bcrypt.compare(password, user.password)) userDb = user
      })
    )
  }
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
    username: userDb.username,
    // password: userDb.password,
    legalRepresentative: userDb.legalRepresentative !== '',
    lessons: filteredLessons,
    plan: userDb.plan,
    // homeworks: userDb.homeworks,
    homeworks: filteredHomeworks,
    files: userDb.files,
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
      if (userNumber) user = await getUser({ phone: userNumber }, userPassword)
      else user = await getUser({ username: userName }, userPassword)

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
        // creating salt for hash from bcrypt library
        const salt = await bcrypt.genSalt(10)
        let representative;
        let student;

        if (legalRepresentative) {
          // hashing the password using bcrypt lib
          const representativeHashedPassword = await bcrypt.hash(representativePassword, salt)
          const studentHashedPassword = await bcrypt.hash(password, salt)

          representative = await createUser({
            role: 'representative',
            name: representativeName,
            surname: representativeSurname,
            phone: representativePhone,
            password: representativeHashedPassword,
          });
          student = await createUser({
            role,
            name,
            surname,
            username,
            plan,
            password: studentHashedPassword,
            legalRepresentative: representative._id
          });
        } else {
          // hashing the password using bcrypt lib
          const studentHashedPassword = await bcrypt.hash(password, salt)

          student = await createUser({
            role,
            name,
            surname,
            username,
            plan,
            password: studentHashedPassword,
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
