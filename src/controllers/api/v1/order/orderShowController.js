import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"

export const orderShowController = baseController(async (req, res) => {

   const record = await prisma.order.findUniqueOrThrow({
      where: { id: req.params.id },
      include: {
         orderProducts:
         {
            include: {
               product: true
            }
         }
      }
   })

   res.status(200).json(new OrderResource(record, {}))
})