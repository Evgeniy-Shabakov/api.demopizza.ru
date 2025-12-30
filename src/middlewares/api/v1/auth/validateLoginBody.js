import { UnauthorizedError } from "#errors/api/v1/UnauthorizedError.js"

export function validateLoginBody(schema) {
   return function (req, res, next) {
      try {
         if (req.body) {
            req.body = schema.parse(req.body)
         }

         next()
      } catch (error) {
         next(new UnauthorizedError('Некоректные данные'))
      }
   }
}