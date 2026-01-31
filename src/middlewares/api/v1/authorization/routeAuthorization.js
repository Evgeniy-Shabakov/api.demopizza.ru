import { baseAutorization } from "./baseAuthorization.js"
import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"
import { employeeRolesHasPermission } from "#utils/api/v1/employeeHelper.js"

export const routeAuthorization = (permission) => baseAutorization((req) => {

   if (employeeRolesHasPermission(req.employee.employeeRoles, permission)) return true

   throw new ForbiddenError('Недостаточно прав для доступа к маршруту')
})