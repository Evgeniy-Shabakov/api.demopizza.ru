import { prisma } from '#lib/prisma.js'

export const legalDocumentAdminService = {
   list() {
      return prisma.legalDocument.findMany({
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.legalDocument.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.legalDocument.create({ data })
   },

   update(id, data) {
      return prisma.legalDocument.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.legalDocument.delete({ where: { id } })
   }
}
