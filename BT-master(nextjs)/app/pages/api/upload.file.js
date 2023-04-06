import fs from "fs/promises"
import path from 'path'
import formidable from 'formidable'
import { dbConnect, UpdateOneFromMongo, findAllFromMongo, findOneFromMongo, deleteOneFromMongo } from '../../utils/dbMongo'

dbConnect();

const readFile = req => {
  const options = formidable.defaultOptions
  options.uploadDir = path.join(process.cwd(), '/public/images')
  options.filename = (name, ext, path, form) => {
    return Date.now().toString() + '_' + path.originalFilename
  }
  const form = formidable()
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields, files })
    })
  })
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
    case 'PATCH':
      try {
        res.status(200).json( true );
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    case 'DELETE':
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
        await readFile(req)

        res.status(200).json( true );
      } catch {
        res.status(500).json({ failed: true });
      }
      break;
    default:
      break;
  }
}
