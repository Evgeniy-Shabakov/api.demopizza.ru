import { ForbiddenError } from "#errors/api/v1/ForbiddenError.js"
import { ROLE } from "#constants/api/v1/roles.js"

export function checkRole(req, allowedRoles) {
   if (!req.user || !req.user.roles || !req.user.roles.length) {
      throw new ForbiddenError('Пользователь не аутентифицирован или у пользователя нет ролей')
   }

   const allowedRolesIds = allowedRoles.map(r => r.ID)
   const userRolesIds = req.user.roles.map(r => r.roleId)

   if (userRolesIds.includes(ROLE.SUPER_ADMIN.ID)) return

   const hasRequiredRole = userRolesIds.some(roleId =>
      allowedRolesIds.includes(roleId)
   )

   if (!hasRequiredRole) {
      throw new ForbiddenError('У пользователя отсутсвует нужная роль')
   }
}

export function hasRoleForRestaurant(user, role, restaurantId) {
   return user.roles.some(item =>
      item.roleId == role.ID && item.restaurantId == restaurantId
   )
}