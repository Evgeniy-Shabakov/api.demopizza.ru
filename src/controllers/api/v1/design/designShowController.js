import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DesignResource } from "#resources/api/v1/DesignResource.js"

export const designShowController = baseController(async (req, res) => {

   const record = await prisma.design.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   res.status(200).json(new DesignResource(record, {}))
})