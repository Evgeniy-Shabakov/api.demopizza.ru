import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { DeliveryZoneResource } from "#resources/api/v1/DeliveryZoneResource.js"

export const deliveryZoneUpdateController = baseController(async (req, res) => {
   
   const record = await prisma.deliveryZone.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new DeliveryZoneResource(record, {}))
})