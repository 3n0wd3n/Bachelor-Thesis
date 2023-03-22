import bcrypt from 'bcrypt'
import User from '../../models/User'
import Homeworks from '../../models/Homeworks'
import { getUser } from './user'
import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo, deleteOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const updateInfoInStudent = async (filter, data) => {
    return await UpdateOneFromMongo(User, filter, data)
}

const deleteHomework = async (id) => {
    return await deleteOneFromMongo(Homeworks, id)
  }

export default async function handler(req, res) {
    const { method, body, query } = req;

    switch (method) {
        case 'GET':
            try {
                res.status(200).json(true);
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        case 'POST':
            try {
                res.status(200).json(true);
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        case 'PUT':
            try {
                res.status(200).json(true);
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        case 'DELETE':
            try {
                const { adminId, studentId, homeworkId } = body
                await updateInfoInStudent({ _id: studentId }, { $pull: { homeworks: homeworkId } })
                await deleteHomework({ _id: homeworkId })
                const userData = await getUser({ _id: adminId })
                res.status(200).json( userData );
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        case 'PATCH':
            try {
                const { adminId, studentId, changedPassword } = body
                // creating salt for hash from bcrypt library
                const salt = await bcrypt.genSalt(10)
                // hashing the password using bcrypt lib
                const changedHashedPassword = await bcrypt.hash(changedPassword, salt)
                await updateInfoInStudent({ _id: studentId }, { password: changedHashedPassword })
                const userData = await getUser({ _id: adminId })
                res.status(200).json( userData );
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        default:
            break;
    }
}