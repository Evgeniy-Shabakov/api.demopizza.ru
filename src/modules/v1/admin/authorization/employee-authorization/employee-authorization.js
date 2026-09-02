import { prisma } from '#lib/prisma.js'
import { ROLE } from "#constants/v1/roles.js"
import { MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL } from "#constants/v1/roles.js"
import { ErrorForbidden } from "#errors/v1/types/error.forbidden.js"
import { baseAuthorization } from '../base-authorization.js'
import { employeeHasRole, getMaxEmployeesControlLevel } from '../../employee/employee.admin.helper.js'


export const employeeAuthorization = baseAuthorization(async (request) => {

   if (!checkEmployeesControlLevelForBodyRoles(request)) {
      throw new ErrorForbidden('Нет прав для работы с этими ролями')
   }

   if (request.method == "POST" && request.body.employeeRoles) {
      if (!haveCommonRestaurants(request, request.user.employeeRoles, request.body.employeeRoles)) {
         throw new ErrorForbidden('Нет прав для создания сотрудника с этими ресторанами')
      }

      return true
   }

   let targetEmployee = await prisma.employee.findUniqueOrThrow({
      where: { id: request.params.id },
      include: { employeeRoles: true }
   })

   if (request.method == "GET" && request.user.id == targetEmployee.id) return true

   targetEmployee = {
      ...targetEmployee,
      maxEmployeesControlLevel: getMaxEmployeesControlLevel(targetEmployee.employeeRoles)
   }

   if (request.user.maxEmployeesControlLevel <= targetEmployee.maxEmployeesControlLevel) {
      throw new ErrorForbidden('Недостаточно прав для работы с этим пользователем')
   }

   if (request.user.maxEmployeesControlLevel > MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL) return true
   if (haveCommonRestaurants(request, request.user.employeeRoles, targetEmployee.employeeRoles)) {
      return true
   }

   throw new ErrorForbidden('Недостаточно прав для выполнения операции с пользователем')
})

function checkEmployeesControlLevelForBodyRoles(request) {
   if (!request.body || !request.body.employeeRoles) return true
   if (request.user.maxEmployeesControlLevel > getMaxEmployeesControlLevel(request.body.employeeRoles)) {
      return true
   }

   return false
}

//нужна более тчательная проверка для ресторанов, проверять не только пересечнение но и приоритет
//ролей в ресторане
function haveCommonRestaurants(request, employeeRoles_1, employeeRoles_2) {
   if (employeeHasRole(request.user, ROLE.OWNER) || employeeHasRole(request.user, ROLE.MANAGER_GENERAL))
       return true

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