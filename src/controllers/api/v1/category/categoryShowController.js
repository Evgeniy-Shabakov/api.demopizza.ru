import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CategoryResource } from "#resources/api/v1/CategoryResource.js"

export const categoryShowController = baseController(async (req, res) => {

   const record = await prisma.category.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new CategoryResource(record, {}))
})