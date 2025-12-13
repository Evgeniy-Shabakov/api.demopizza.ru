import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { AddressResource } from "#resources/api/v1/addressResource.js"

export const addressIndexController = baseController(async (req, res) => {

   const records = await prisma.address.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(AddressResource.collection(records, {}))
})
