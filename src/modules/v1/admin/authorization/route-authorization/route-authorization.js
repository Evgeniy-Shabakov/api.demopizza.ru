import { baseAuthorization } from "../base-authorization.js"
import { ErrorForbidden } from "#errors/v1/types/error.forbidden.js"
import { employeeRolesHasPermission } from "../../employee/employee.admin.helper.js"

export const routeAuthorization = (permission) => baseAuthorization(async (request) => {

   if (employeeRolesHasPermission(request.user.employeeRoles, permission)) return true

   throw new ErrorForbidden('Недостаточно прав для доступа к маршруту')
})