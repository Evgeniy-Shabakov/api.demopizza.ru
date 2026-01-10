import { PERMISSIONS } from "#constants/api/v1/permissions.js"
import { baseAutorization } from "./baseAuthorization.js"
import { prisma } from '#services/prismaClient.js'

export const productRestaurantAuthorization = baseAutorization(async (req) => {

   if (req.user.hasAnyRole(PERMISSIONS.GENERAL)) return true

   if (req.body && req.body.restaurantId &&
      req.user.hasAnyRoleForRestaurant(PERMISSIONS.SECONDARY, req.body.restaurantId)) {
      return true
   }

   if (req.method == 'DELETE') {
      const record = await prisma.productRestaurant.findUniqueOrThrow({
         where: { id: req.params.id }
      })

      if (req.user.hasAnyRoleForRestaurant(PERMISSIONS.SECONDARY, record.restaurantId)) {
         return true
      }
   }

   return false
})