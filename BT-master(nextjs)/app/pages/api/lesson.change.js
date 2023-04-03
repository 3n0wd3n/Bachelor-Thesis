import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo, deleteOneFromMongo } from '../../utils/dbMongo'
import { addLessonChange } from './student.change'
import Apology from '../../models/Apology'
import { getUser } from './user'

dbConnect();

const createApology = (data) => {
    return Apology(data).save()
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
                const { studentId, lessonId, date } = body
                await createApology({ studentId, lessonId })
                await addLessonChange({ _id: lessonId }, { $push: { statuses: date } })

                const userData = await getUser({ _id: studentId })
                res.status(200).json( userData );
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
                res.status(200).json(true);
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        case 'PATCH':
            try {
                res.status(200).json(true);
            } catch {
                res.status(500).json({ failed: true });
            }
            break;
        default:
            break;
    }
}