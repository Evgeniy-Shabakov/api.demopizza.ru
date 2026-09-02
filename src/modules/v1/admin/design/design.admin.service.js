import { prisma } from '#lib/prisma.js'

export const designAdminService = {
   list() {
      return prisma.design.findMany({
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.design.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.design.create({ data })
   },

   update(id, data) {
      return prisma.design.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.design.delete({ where: { id } })
   }
}
