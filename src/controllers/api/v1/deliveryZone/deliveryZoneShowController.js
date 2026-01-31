import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DeliveryZoneResource } from "#resources/api/v1/DeliveryZoneResource.js"

export const deliveryZoneShowController = baseController(async (req, res) => {

   const record = await prisma.deliveryZone.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new DeliveryZoneResource(record, {}))
})