import User from '../../models/User'
import { dbConnect} from '../../utils/dbMongo'

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ name: 'nothing' });
      break;
    case 'POST':
      const { role, name, surname, username, password } = body;
      const user = await User({
          role: 'student',
          name: 'Janna',
          surname: 'Gregory',
          username: 'jana',
          password: 'jangre',
      }).save();

      res.status(200).json({ name: 'John Doe' });
      break;
    default:
      break;
  }
}
