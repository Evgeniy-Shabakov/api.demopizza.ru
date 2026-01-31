import multer from 'multer'
import path from 'path'
import slugify from 'slugify'
import { generateUniqueSuffix } from '#utils/api/v1/generateUniqueSuffix.js'

export const productFileLoading = multer({
   storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, `storage/public/images/products/`),
      filename: (req, file, cb) => {
         const fileExt = path.extname(file.originalname)
         const uniqueSuffix = generateUniqueSuffix()

         const newFilename = slugify(req.body.name) + '-' + `${uniqueSuffix}${fileExt}`

         cb(null, newFilename)
      }
   }),
   limits: {
      fileSize: 100 * 1024 // 100Кб
   },
   fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (allowedTypes.includes(file.mimetype)) {
         cb(null, true)
      } else {
         cb(new multer.MulterError("UNEXPECTED_FILE_TYPE", file), false);
      }
   }
}).single('imageFile')
