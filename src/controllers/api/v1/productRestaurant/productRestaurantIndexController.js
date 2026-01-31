import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductRestaurantResource } from "#resources/api/v1/ProductRestaurantResource.js"

export const productRestaurantIndexController = baseController(async (req, res) => {

   const records = await prisma.productRestaurant.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(ProductRestaurantResource.collection(records, {}))
})
