import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductResource } from "#resources/api/v1/ProductResource.js"

export const productShowController = baseController(async (req, res) => {

   const record = await prisma.product.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new ProductResource(record, {}))
})