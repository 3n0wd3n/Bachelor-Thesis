import User from '../../models/User'
import Lecture from '../../models/Lecture'
import { dbConnect, UpdateOneFromMongo, getCollectionFromMongo } from '../../utils/dbMongo'

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    // http://localhost:3000/api/user
    case 'GET':
      const allUsers = await getCollectionFromMongo(User);
      res.status(200).json({ allUsers });
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
