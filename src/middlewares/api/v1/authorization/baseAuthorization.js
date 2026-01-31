import { ROLE } from "#constants/api/v1/roles.js"
import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"
import { employeeHasRole } from "#utils/api/v1/employeeHelper.js"

export function baseAutorization(customCheck) {
   return async (req, res, next) => {
      try {
         if (!req.employee || !req.employee.employeeRoles || !req.employee.employeeRoles.length) {
            throw new ForbiddenError('Пользователь не аутентифицирован или недостаточно прав')
         }

         if (employeeHasRole(req.employee, ROLE.SUPER_ADMIN)) return next()

         if (await customCheck(req)) return next()

         throw new ForbiddenError('Недостаточно прав для данного действия')
      } catch (error) {
         next(error)
      }
   }
}