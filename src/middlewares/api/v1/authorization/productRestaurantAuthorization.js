import { prisma } from "#services/prismaClient.js"
import { baseAutorization } from "./baseAuthorization.js"
import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"
import { MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL } from "#constants/api/v1/roles.js"
import { employeeRolesHasPermission } from "#utils/api/v1/employeeHelper.js"

export const productRestaurantAuthorization = (permission) => baseAutorization(async (req) => {

   if (req.employee.maxEmployeesControlLevel > MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL) return true

   if (req.method == 'POST' && req.body.restaurantId) {
      return checkEmployeeAccessForRestaurantId(req.employee, req.body.restaurantId, permission)
   }

   if (req.method == 'PUT' && req.body.restaurantId) {
      checkEmployeeAccessForRestaurantId(req.employee, req.body.restaurantId, permission)

      const record = await prisma.productRestaurant.findUniqueOrThrow({
         where: { id: req.params.id }
      })

      return checkEmployeeAccessForRestaurantId(req.employee, record.restaurantId, permission)
   }

   if (req.method == 'DELETE') {
      const record = await prisma.productRestaurant.findUniqueOrThrow({
         where: { id: req.params.id }
      })

      return checkEmployeeAccessForRestaurantId(req.employee, record.restaurantId, permission)
   }

   throw new ForbiddenError('Нет прав для работы с этими ресторанами по заданному маршруту')
})

function checkEmployeeAccessForRestaurantId(employee, restaurantId, permission) {
   const employeeRolesForRestaurant = employee.employeeRoles
      .filter(role => role.restaurantId == restaurantId)

   if (employeeRolesForRestaurant.length == 0) {
      throw new ForbiddenError('Нет прав для работы с этими ресторанами')
   }

   if (employeeRolesHasPermission(employeeRolesForRestaurant, permission)) return true

   throw new ForbiddenError('Нет прав для работы с этими ресторанами по заданному маршруту')
}