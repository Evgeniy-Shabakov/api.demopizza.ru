import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CategoryResource } from "#resources/api/v1/CategoryResource.js"

export const categoryStoreController = baseController(async (req, res) => {

   const record = await prisma.category.create({
      data: req.body
   })

   res.status(201).json(new CategoryResource(record, {}))
})