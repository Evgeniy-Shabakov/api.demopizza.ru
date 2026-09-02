import { prisma } from '#lib/prisma.js'
import { ORDER_STATUS } from "#constants/v1/data-types/order-status.js"

export function orderAdminServiceActive(cityId, restaurantId) {
   const where = {
      orderStatusId: { notIn: [ORDER_STATUS.COMPLETED.ID, ORDER_STATUS.CANCEL.ID] }
   }

   if (cityId) where.cityId = cityId
   if (restaurantId) where.restaurantId = restaurantId
   
   return prisma.order.findMany({
      where,
      orderBy: { id: 'desc' },
      include: {
         orderProducts: {
            include: {
               product: true
            }
         },
         user: { select: { phone: true } },
         city: { select: { name: true } },
         restaurant: { select: { name: true } },
         deliveryZone: { select: { name: true } },
         address: {
            select:
            {
               street: true,
               house: true,
               corps: true,
               flat: true,
               entrance: true,
               floor: true,
               entranceCode: true,
               comment: true,
               addressAsString: true,
            },
         }
      }
   })
}