import User from '../../models/User'
import Lecture from '../../models/Lecture'
import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const filterLessons = async (lessonIds, admin) => {
  // getting array of lessons from database
  const lessonsDb = await findAllFromMongo(Lecture, { $and: [{ _id: lessonIds }, { status: 'waiting' }] });
  // format lessons
  const lessons = lessonsDb.map(lesson => ({
    id: lesson._id,
    status: lesson.status,
    date: lesson.from,
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

const getUser = async(filter) => {
  const userDb = await findOneFromMongo(User, filter);
  if (!userDb) return;
  
  if (userDb.role === 'admin') return getAdmin(userDb);
  else return getStudent(userDb);
}

const getStudent = async (userDb, admin=false) => {
  const filteredLessons = await filterLessons(userDb.lectures, admin);

  return {
    id: userDb._id,
    role: userDb.role,
    firstName: userDb.name,
    lastName: userDb.surname,
    legalRepresentative: userDb.userRepresentative !== '',
    lessons: filteredLessons,
    plan: userDb.plan,
    homeworks: [],
    files: [],
    wordList: userDb.wordList,
    payments: [],
  }
}

const getAdmin = async (userDb) => {
  const studentsDb = await findAllFromMongo(User, {role: 'student'})
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
      if (userNumber){
        user = await getUser({ phone: userNumber, password: userPassword });
      }else{
        user = await getUser({ username: userName, password: userPassword });
      }

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
        const legalRepresentative = !!representativeName;
        let representative;
        
        if (legalRepresentative) {
          representative = await User({
            role: 'representative',
            name: representativeName,
            surname: representativeSurname,
            phone: representativePhone,
            password: representativePassword,
          }).save();
        }

        const student = await User({
          role,
          name,
          surname,
          username,
          password,
          plan,
          legalRepresentative: representative._id,
        }).save();
        
        let studentTmp = student._id

        lectures.forEach(async (lecture) => {
          const lectureDb = await Lecture({
            from: lecture.from,
            to: lecture.to,
            studentId: student._id,
          }).save();

          await UpdateOneFromMongo(User, { _id: student._id }, { $push: { lectures: lectureDb._id } })
        });
        // TODO: probrat s Trnečkou
        await UpdateOneFromMongo(User, { _id: representative._id }, { child: studentTmp })

        
        res.status(200).json({ data: 'updated data' });
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    default:
      break;
  }
}
