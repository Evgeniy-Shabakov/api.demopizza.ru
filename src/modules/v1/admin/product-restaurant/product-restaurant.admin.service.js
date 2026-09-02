import { prisma } from '#lib/prisma.js'

export const productRestaurantAdminService = {
   list() {
      return prisma.productRestaurant.findMany({
         include: {
            product: true,
            restaurant: true
         },
         orderBy: { createdAt: 'desc' }
      })
   },

   getOne(id) {
      return prisma.productRestaurant.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.productRestaurant.create({ data })
   },

   update(id, data) {
      return prisma.productRestaurant.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.productRestaurant.delete({ where: { id } })
   }
}
