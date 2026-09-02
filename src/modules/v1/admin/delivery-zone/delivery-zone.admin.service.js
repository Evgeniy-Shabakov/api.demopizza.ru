import { prisma } from '#lib/prisma.js'

export const deliveryZoneAdminService = {
   list() {
      return prisma.deliveryZone.findMany({
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.deliveryZone.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.deliveryZone.create({ data })
   },

   update(id, data) {
      return prisma.deliveryZone.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.deliveryZone.delete({ where: { id } })
   }
}
