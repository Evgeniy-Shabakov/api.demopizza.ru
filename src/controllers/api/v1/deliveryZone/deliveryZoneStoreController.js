import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DeliveryZoneResource } from "#resources/api/v1/deliveryZoneResource.js"

export const deliveryZoneStoreController = baseController(async (req, res) => {

   const record = await prisma.deliveryZone.create({
      data: req.body
   })

   res.status(201).json(new DeliveryZoneResource(record, {}))
})