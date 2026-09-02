import { prisma } from '#lib/prisma.js'

export const legalDocumentClientService = {
   list() {
      return prisma.legalDocument.findMany({
         where: {
            isActive: true
         },
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.legalDocument.findUniqueOrThrow({
         where: {
            id,
            isActive: true
         }
      })
   }
}
