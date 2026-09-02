import { prisma } from '#lib/prisma.js'

export const cityClientService = {
   list() {
      return prisma.city.findMany({
         include: {
            restaurants: true,
            deliveryZones: true
         },
         orderBy: { id: 'asc' }
      })
   }
}
