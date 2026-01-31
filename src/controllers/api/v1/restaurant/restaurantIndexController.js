import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { RestaurantResource } from "#resources/api/v1/RestaurantResource.js"

export const restaurantIndexController = baseController(async (req, res) => {

   const records = await prisma.restaurant.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(RestaurantResource.collection(records, {}))
})
