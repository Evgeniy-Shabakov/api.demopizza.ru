import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DeliveryZoneResource } from "#resources/api/v1/deliveryZoneResource.js"

export const deliveryZoneIndexController = baseController(async (req, res) => {

   const records = await prisma.deliveryZone.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(DeliveryZoneResource.collection(records, {}))
})
