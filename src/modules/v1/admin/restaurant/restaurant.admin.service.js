import { prisma } from '#lib/prisma.js'

export const restaurantAdminService = {
   list() {
      return prisma.restaurant.findMany({
         include: {
            city: true,
            restaurantSchedule: true
         },
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.restaurant.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.restaurant.create({ data })
   },

   update(id, data) {
      return prisma.restaurant.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.restaurant.delete({ where: { id } })
   }
}
