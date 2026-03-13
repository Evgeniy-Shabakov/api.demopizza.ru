import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { PromocodeResource } from "#resources/api/v1/PromocodeResource.js"

export const promocodeShowController = baseController(async (req, res) => {

   const record = await prisma.promocode.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   res.status(200).json(new PromocodeResource(record, {}))
})