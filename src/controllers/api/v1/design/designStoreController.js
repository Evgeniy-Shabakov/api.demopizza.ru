import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DesignResource } from "#resources/api/v1/DesignResource.js"

export const designStoreController = baseController(async (req, res) => {

   const record = await prisma.design.create({
      data: req.body
   })

   res.status(201).json(new DesignResource(record, {}))
})