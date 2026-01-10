import { ROLE } from "#constants/api/v1/roles.js"
import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"

export function baseAutorization(checkUniqueAuthorization) {
   return async (req, res, next) => {
      try {
         if (!req.user || !req.user.roles || !req.user.roles.length) {
            throw new ForbiddenError('Пользователь не аутентифицирован или у пользователя нет ролей')
         }

         if (req.user.hasRole(ROLE.SUPER_ADMIN)) return next()

         if (await checkUniqueAuthorization(req)) return next()

         throw new ForbiddenError('У пользователя отсутсвует нужная роль')
      } catch (error) {
         next(error)
      }
   }
}