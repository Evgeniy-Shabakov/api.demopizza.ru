import { prisma } from '#lib/prisma.js'

export function orderAdminServiceGetOne(id) {
   return prisma.order.findUniqueOrThrow({
      where: { id: id },
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