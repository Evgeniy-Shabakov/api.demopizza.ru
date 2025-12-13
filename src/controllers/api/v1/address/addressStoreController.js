import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { AddressResource } from "#resources/api/v1/addressResource.js"

export const addressStoreController = baseController(async (req, res) => {

   const record = await prisma.address.create({
      data: req.body
   })

   res.status(201).json(new AddressResource(record, {}))
})