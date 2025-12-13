import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductResource } from "#resources/api/v1/productResource.js"


export const productIndexController = baseController(async (req, res) => {

   const records = await prisma.product.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(ProductResource.collection(records, {}))
})
