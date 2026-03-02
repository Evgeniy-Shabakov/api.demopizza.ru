import multer from 'multer'
import path from 'path'
import slugify from 'slugify'
import { generateUniqueSuffix } from '#utils/api/v1/generateUniqueSuffix.js'

export const legalDocumentFileLoading = multer({
   storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, `storage/public/legal-documents/`),
      filename: (req, file, cb) => {
         const fileExt = path.extname(file.originalname)
         const uniqueSuffix = generateUniqueSuffix()

         const newFilename = slugify(req.body.name) + '-' + `${uniqueSuffix}${fileExt}`

         cb(null, newFilename)
      }
   }),
   limits: {
      fileSize: 5 * 1024 * 1024 // 5 МБ
   },
   fileFilter: (req, file, cb) => {
      const allowedTypes = [
         'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // для .docx
         'application/pdf'                                           // для .pdf
      ]
      if (allowedTypes.includes(file.mimetype)) {
         cb(null, true)
      } else {
         cb(new multer.MulterError("UNEXPECTED_FILE_TYPE", file), false)
      }
   }
}).single('docFile')
