import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { RestaurantResource } from "#resources/api/v1/RestaurantResource.js"

export const restaurantShowController = baseController(async (req, res) => {

   const record = await prisma.restaurant.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })
   
   res.status(200).json(new RestaurantResource(record, {}))
})