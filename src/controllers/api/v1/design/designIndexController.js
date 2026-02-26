import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DesignResource } from "#resources/api/v1/DesignResource.js"

export const designIndexController = baseController(async (req, res) => {

   const records = await prisma.design.findMany({
      orderBy: req.sort
   })

   res.status(200).json(DesignResource.collection(records, {}))
})
