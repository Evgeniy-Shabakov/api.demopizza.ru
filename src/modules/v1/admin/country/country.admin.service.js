import { prisma } from '#lib/prisma.js'

export const countryAdminService = {
   list() {
      return prisma.country.findMany({
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.country.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.country.create({ data })
   },

   update(id, data) {
      return prisma.country.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.country.delete({ where: { id } })
   }
}
