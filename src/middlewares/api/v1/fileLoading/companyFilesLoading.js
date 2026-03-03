import multer from 'multer'
import path from 'path'

export const companyFilesLoading = multer({
   storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, `storage/public/images/`),
      filename: (req, file, cb) => {
         if (file.fieldname == 'logoFile') {
            cb(null, 'logo' + path.extname(file.originalname))
         }
         if (file.fieldname == 'faviconFile') {
            cb(null, 'favicon' + path.extname(file.originalname))
         }
      }
   }),
   limits: {
      fileSize: 1 * 1024 * 1024 // 1 МБ
   },
   fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png']

      if (file.fieldname === 'faviconFile') {
         allowedTypes.push('image/x-icon', 'image/vnd.microsoft.icon', 'image/svg+xml');
      }

      if (allowedTypes.includes(file.mimetype)) {
         cb(null, true)
      } else {
         cb(new multer.MulterError("UNEXPECTED_FILE_TYPE", file), false)
      }
   }
}).fields([
   { name: 'logoFile', maxCount: 1 },
   { name: 'faviconFile', maxCount: 1 }
])
