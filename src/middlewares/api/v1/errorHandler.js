import fs from 'fs'
import multer from 'multer'
import jwt from 'jsonwebtoken'
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'
import { ForbiddenError } from '#errors/api/v1/ForbiddenError.js'

export function errorHandler(error, req, res, next) {
   console.error(error)

   if (req.file) { //если операция с добавлением файла неуспешна, удаляем файл
      fs.unlink(req.file.path, (err) => {
         if (err) console.error('Ошибка при удалении файла:', err);
      })
   }

   if (error instanceof multer.MulterError) {
      let message

      if (error.code == 'UNEXPECTED_FILE_TYPE') message = 'Неверное разрешение файла (jpeg, png)'
      else if (error.code == 'LIMIT_FILE_SIZE') message = 'Слишком большой файл (до 100Кб)'

      return res.status(422).json({
         error: 'Ошибка валидации',
         message: message || 'Ошибка при проверке файла',
         details: {
            error: error,
            stack: error.stack,
         }
      })
   }

   if (error.name === 'ZodError') {
      return res.status(422).json({
         error: 'Ошибка валидации',
         message: error.issues[0].message,
         details: {
            error: error,
            stack: error.stack,
            issues: error.issues
         }
      })
   }

   if (error.code === 'P2025')
      return res.status(404).json({
         error: 'Ошибка БД',
         message: 'Запись не найдена в базе данных',
         details: {
            error: error,
            stack: error.stack,
         }
      })

   if (error.code === 'P2002') {
      return res.status(409).json({
         error: 'Ошибка уникальности',
         message: 'Запись с таким значением уже существует',
         details: {
            error: error,
            stack: error.stack,
         }
      })
   }

   if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
         error: 'Unauthorized error',
         message: 'Токен устарел',
         details: {
            error: error,
            stack: error.stack,
         }
      })
   }

   if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
         error: 'Unauthorized error',
         message: 'Токен не предоставлен или некорректен',
         details: {
            error: error,
            stack: error.stack,
         }
      })
   }

   if (error instanceof UnauthorizedError) {
      return res.status(401).json({
         error: 'Unauthorized error',
         message: error.message || 'Unauthorized error',
         details: {
            error: error,
            stack: error.stack,
         }
      })
   }

   if (error instanceof ForbiddenError) {
      return res.status(403).json({
         error: 'Forbidden error',
         message: error.message || 'Forbidden error',
         details: {
            error: error,
            stack: error.stack,
         }
      })
   }

   res.status(500).json({
      error: 'Ошибка сервера',
      message: error.message || 'Неизвестная ошибка',
      details: {
         error: error,
         stack: error.stack,
      }
   })
}