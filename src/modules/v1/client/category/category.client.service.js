import { prisma } from '#lib/prisma.js'

export const categoryClientService = {
   list() {

      return prisma.category.findMany({
         include: {
            products: {
               where: { isActive: true },
               include: {
                  productRestaurants: true
               },
               orderBy: [
                  { positionInCategory: 'asc' },
                  { id: 'asc' }
               ]
            }
         },
         orderBy: [
            { position: 'asc' },
            { id: 'asc' }
         ]
      })

   }
}
