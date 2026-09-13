import { prisma } from '#lib/prisma.js'

export function orderClientServiceLast(userId) {
   return prisma.order.findFirst({
      where: { userId },
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