import User from '../../models/User'
import Lecture from '../../models/Lecture'
import { dbConnect, UpdateOneFromMongo, getCollectionFromMongo, findOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const getUser = async (filter) => {
  const userDb = await findOneFromMongo(User, filter);

  return {
    id: userDb._id,
    role: userDb.role,
    firstName: userDb.name,
    lastName: userDb.surname,
    legalRepresentative: userDb.userRepresentative !== '',
    lessons: [],
    plan: userDb.plan,
    homeworks: [],
    files: [],
    wordList: userDb.wordList,
    payments: [],
  }
}

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    // http://localhost:3000/api/user
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
