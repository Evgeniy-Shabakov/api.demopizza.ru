import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CategoryResource } from "#resources/api/v1/CategoryResource.js"

export const categoryIndexController = baseController(async (req, res) => {

   const records = await prisma.category.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(CategoryResource.collection(records, {}))
})
