import { ROLE } from "#constants/api/v1/roles.js"

export function employeeHasRole(employee, role) {
   return employee.employeeRoles.some(item => item.roleId == role.ID)
}

export function employeeRolesHasPermission(employeeRoles, permission) {
   const hasPermission = employeeRoles.some(role => {
      const roleConst = Object.values(ROLE).find(r => r.ID === role.roleId)
      return roleConst.ROUTE_PERMISSIONS.includes(permission)
   })

   return hasPermission
}

export function getMaxEmployeesControlLevel(employeeRoles) {
   const employeeRolesIds = employeeRoles.map(item => item.roleId)

   let maxLevel = 0

   for (const roleId of employeeRolesIds) {
      const role = Object.values(ROLE).find(r => r.ID === roleId)

      if (role.EMPLOYEES_CONTROL_LEVEL > maxLevel) {
         maxLevel = role.EMPLOYEES_CONTROL_LEVEL
      }
   }

   return maxLevel
}