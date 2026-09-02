import { prisma } from '#lib/prisma.js'

export const categoryAdminService = {
   list() {
      return prisma.category.findMany({
         orderBy: [
            { position: 'asc' },
            { id: 'asc' }
         ]
      })
   },

   getOne(id) {
      return prisma.category.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.category.create({ data })
   },

   update(id, data) {
      return prisma.category.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.category.delete({ where: { id } })
   }
}
