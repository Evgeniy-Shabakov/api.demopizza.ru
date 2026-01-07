import { ROLE } from "#constants/api/v1/roles.js"
import { checkRole } from "./checkRole.js"
import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"

export function cityIndexAutorization() {
   return function (req, res, next) {
      try {
         next()
      } catch (error) {
         next(error)
      }
   }
}

export function cityShowAutorization() {
   return function (req, res, next) {
      try {
         next()
      } catch (error) {
         next(error)
      }
   }
}

export function cityStoreAutorization() {
   return function (req, res, next) {
      try {
         if (!req.user || !req.user.roles || !req.user.roles.length) {
            throw new ForbiddenError('Пользователь не аутентифицирован или у пользователя нет ролей')
         }

         const userRolesIds = req.user.roles.map(r => r.roleId)

         if (userRolesIds.includes(ROLE.SUPER_ADMIN.ID)) return next()

         if (userRolesIds.includes(ROLE.DIRECTOR.ID)) return next()

         throw new ForbiddenError('У пользователя отсутсвует нужная роль')
      } catch (error) {
         next(error)
      }
   }
}

export function hasRole(user, role) {
   return user.roles.some(item => item.roleId == role.ID)
}