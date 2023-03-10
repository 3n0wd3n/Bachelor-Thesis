import User from '../../models/User'
import Homeworks from '../../models/Homeworks'
import { getUser } from './user'
import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const updateInfoInUser = async (filter, data) => {
  return await UpdateOneFromMongo(User, filter, data)
}

const createHomework = async (data) => {
  return await Homeworks(data).save()
}

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      try {
        res.status(200).json( true );
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    case 'DELETE':
      try {
        const { changedHomeworks } = body
        console.log(body)
        res.status(200).json( true );
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    case 'PUT':
      try {
        const { adminId, id, newTitle, newDescription } = body
        const homework = await createHomework({
          title: newTitle,
          description: newDescription
        });
        const test = await updateInfoInUser({ _id: id }, { $push: { homeworks: homework._id } })
        const userData = await getUser({ _id: adminId })
        res.status(200).json( userData );
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    case 'POST':
      try {
        // const changedName = body.changedName
        // const changedSurname = body.changedSurname
        const { id, studentId, changedName, changedSurname, plan } = body
        await updateInfoInUser({ _id: studentId }, { name: changedName, surname: changedSurname, plan })
        const userData = await getUser({ _id: id })
        res.status(200).json( userData );
      } catch (err) {
        res.status(500).json({ failed: true });
      }
      break;
    default:
      break;
  }
}
