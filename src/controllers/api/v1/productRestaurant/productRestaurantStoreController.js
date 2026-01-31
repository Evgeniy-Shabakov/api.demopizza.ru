import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductRestaurantResource } from "#resources/api/v1/ProductRestaurantResource.js"

export const productRestaurantStoreController = baseController(async (req, res) => {

   const record = await prisma.productRestaurant.create({
      data: req.body
   })

   res.status(201).json(new ProductRestaurantResource(record, {}))
})