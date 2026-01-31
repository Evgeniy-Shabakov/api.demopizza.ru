import { prisma } from "#services/prismaClient.js"
import { MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL } from "#constants/api/v1/roles.js"
import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"
import { getMaxEmployeesControlLevel } from "#utils/api/v1/employeeHelper.js"
import { baseAutorization } from "./baseAuthorization.js"

export const employeeAuthorization = baseAutorization(async (req) => {

   if (!checkEmployeesControlLevelForBodyRoles(req)) {
      throw new ForbiddenError('Нет прав для работы с этими ролями')
   }

   if (req.method == "POST" && req.body.employeeRoles) {
      if (!haveCommonRestaurants(req.employee.employeeRoles, req.body.employeeRoles)) {
         throw new ForbiddenError('Нет прав для создания сотрудника с этими ресторанами')
      }

      return true
   }

   let targetEmployee = await prisma.employee.findUniqueOrThrow({
      where: { id: req.params.id },
      include: { employeeRoles: true }
   })

   if (req.method == "GET" && req.employee.id == targetEmployee.id) return true

   targetEmployee = {
      ...targetEmployee,
      maxEmployeesControlLevel: getMaxEmployeesControlLevel(targetEmployee.employeeRoles)
   }

   if (req.employee.maxEmployeesControlLevel <= targetEmployee.maxEmployeesControlLevel) {
      throw new ForbiddenError('Недостаточно прав для работы с этим пользователем')
   }

   if (req.employee.maxEmployeesControlLevel > MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL) return true
   if (haveCommonRestaurants(req.employee.employeeRoles, targetEmployee.employeeRoles)) {
      return true
   }

   throw new ForbiddenError('Недостаточно прав для выполнения операции с пользователем')
})

function checkEmployeesControlLevelForBodyRoles(req) {
   if (!req.body || !req.body.employeeRoles) return true
   if (req.employee.maxEmployeesControlLevel > getMaxEmployeesControlLevel(req.body.employeeRoles)) {
      return true
   }

   return false
}

//нужна более тчательная проверка для ресторанов, проверять не только пересечнение но и приоритет
//ролей в ресторане
function haveCommonRestaurants(employeeRoles_1, employeeRoles_2) {
   const reqEmployeeRestaurantsIds = employeeRoles_1
      .filter(item => item.restaurantId != null)
      .map(item => item.restaurantId)

   const targetEmployeeRestaurantsIds = employeeRoles_2
      .filter(item => item.restaurantId != null)
      .map(item => item.restaurantId)

   if (reqEmployeeRestaurantsIds.length === 0 || targetEmployeeRestaurantsIds.length === 0) {
      return false
   }

   const commonRestaurantsIds = reqEmployeeRestaurantsIds
      .filter(restaurantId => targetEmployeeRestaurantsIds.includes(restaurantId))

   return commonRestaurantsIds.length > 0
}