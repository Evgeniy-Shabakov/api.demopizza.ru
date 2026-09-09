import { prisma } from '#lib/prisma.js'
import { ORDER_STATUS } from "#constants/v1/data-types/order-status.js"

export function orderClientServiceActive(userId) {
   return prisma.order.findMany({
      where: {
         userId,
         orderStatusId: { notIn: [ORDER_STATUS.COMPLETED.ID, ORDER_STATUS.CANCEL.ID] }
      },
      orderBy: { id: 'desc' },
      include: {
         orderProducts: {
            include: {
               product: true
            }
         },
         user: { select: { phone: true } },
         city: { select: { name: true } },
         restaurant: {
            select: {
               name: true,
               address: true
            },
         },
         deliveryZone: { select: { name: true } },
         address: {
            select:
            {
               name: true,
               street: true,
               house: true,
               corps: true,
               flat: true,
               entrance: true,
               floor: true,
               entranceCode: true,
               comment: true,
               addressAsString: true,
            }
         },
         payment: {
            select:
            {
               paymentUrl: true
            }
         }
      }
   })
}