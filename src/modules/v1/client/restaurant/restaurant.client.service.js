import { prisma } from '#lib/prisma.js'

export const restaurantClientService = {
   list() {
      return prisma.restaurant.findMany({
         include: {
            city: true,
            restaurantSchedule: true
         },
         orderBy: { id: 'asc' }
      })
   }
}
