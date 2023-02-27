import User from '../../models/User'
import { getUser } from './user'
import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const updateInfoInUser = async (filter, data) => {
  return await UpdateOneFromMongo(User, filter, data)
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
    case 'PUT':
      try {
        res.status(200).json( true );
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
