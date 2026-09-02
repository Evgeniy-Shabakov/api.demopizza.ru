import { prisma } from '#lib/prisma.js'

export const cityAdminService = {
   list() {
      return prisma.city.findMany({
         include: {
            country: true
         },
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.city.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.city.create({ data })
   },

   update(id, data) {
      return prisma.city.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.city.delete({ where: { id } })
   }
}
