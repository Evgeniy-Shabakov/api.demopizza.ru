import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { AddressResource } from "#resources/api/v1/AddressResource.js"

export const addressShowController = baseController(async (req, res) => {

   const record = await prisma.address.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new AddressResource(record, {}))
})