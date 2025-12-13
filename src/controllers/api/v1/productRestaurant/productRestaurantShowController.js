import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductRestaurantResource } from "#resources/api/v1/productRestaurantResource.js"

export const productRestaurantShowController = baseController(async (req, res) => {

   const record = await prisma.productRestaurant.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new ProductRestaurantResource(record, {}))
})