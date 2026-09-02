import { ROLE } from "#constants/v1/roles.js"
import { ErrorForbidden } from "#errors/v1/types/error.forbidden.js"
import { employeeHasRole } from "../employee/employee.admin.helper.js"

export function baseAuthorization(customCheck) {
   return async (request, reply) => {

      if (!request.user || !request.user.employeeRoles || !request.user.employeeRoles.length) {
         throw new ErrorForbidden('Пользователь не аутентифицирован или недостаточно прав')
      }

      if (employeeHasRole(request.user, ROLE.SUPER_ADMIN)) return

      if (await customCheck(request)) return

      throw new ErrorForbidden('Недостаточно прав для данного действия')

   }
}