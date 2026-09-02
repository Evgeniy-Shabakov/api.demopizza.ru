import { prisma } from '#lib/prisma.js'

export async function productRestaurantStopListCountController(request, reply) {

   const { restaurantId } = request.query

   const where = {
      isInStopList: true
   }

   if (restaurantId) {
      where.restaurantId = restaurantId
   }

   const count = await prisma.productRestaurant.count({
      where
   })

   return {
      data: count,
      meta: {
         filter: {
            restaurantId
         }
      }
   }
}
