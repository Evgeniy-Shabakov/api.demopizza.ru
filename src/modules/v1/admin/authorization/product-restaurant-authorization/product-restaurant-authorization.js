import { prisma } from '#lib/prisma.js'
import { MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL } from "#constants/v1/roles.js"
import { employeeRolesHasPermission } from '../../employee/employee.admin.helper.js'
import { baseAuthorization } from '../base-authorization.js'
import { ErrorForbidden } from '#errors/v1/types/error.forbidden.js'

export const productRestaurantAuthorization = (permission) => baseAuthorization(async (request) => {

   if (request.user.maxEmployeesControlLevel > MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL) return true

   if (request.method == 'POST' && request.body.restaurantId) {
      return checkEmployeeAccessForRestaurantId(request.user, request.body.restaurantId, permission)
   }

   if (request.method == 'PUT' && request.body.restaurantId) {
      checkEmployeeAccessForRestaurantId(request.user, request.body.restaurantId, permission)

      const record = await prisma.productRestaurant.findUniqueOrThrow({
         where: { id: request.params.id }
      })

      return checkEmployeeAccessForRestaurantId(request.user, record.restaurantId, permission)
   }

   if (request.method == 'DELETE') {
      const record = await prisma.productRestaurant.findUniqueOrThrow({
         where: { id: request.params.id }
      })

      return checkEmployeeAccessForRestaurantId(request.user, record.restaurantId, permission)
   }

   throw new ErrorForbidden('Нет прав для работы с этими ресторанами по заданному маршруту')
})

function checkEmployeeAccessForRestaurantId(employee, restaurantId, permission) {
   const employeeRolesForRestaurant = employee.employeeRoles
      .filter(role => role.restaurantId == restaurantId)

   if (employeeRolesForRestaurant.length == 0) {
      throw new ErrorForbidden('Нет прав для работы с этими ресторанами')
   }

   if (employeeRolesHasPermission(employeeRolesForRestaurant, permission)) return true

   throw new ErrorForbidden('Нет прав для работы с этими ресторанами по заданному маршруту')
}