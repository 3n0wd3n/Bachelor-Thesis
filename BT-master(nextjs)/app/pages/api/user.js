import User from '../../models/User'
import Lecture from '../../models/Lecture'
import { dbConnect, UpdateOneFromMongo } from '../../utils/dbMongo'

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'nothing' });
      break;
    case 'POST':
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
          legalRepresentative: representative._id,
      }).save();

      lectures.forEach(async (lecture) => {
        const lectureDb = await Lecture({
          from: lecture.from,
          to: lecture.to,
          studentId: student._id,
        }).save();

        await UpdateOneFromMongo(User, { _id: student._id }, { $push: { lectures: lectureDb._id } })
      });

      res.status(200).json();
      break;
    default:
      break;
  }
}
