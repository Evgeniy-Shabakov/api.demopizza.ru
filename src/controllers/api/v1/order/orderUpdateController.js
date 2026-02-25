import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"

export const orderUpdateController = baseController(async (req, res) => {

   const updatedOrder = await prisma.order.update({
      where: { id: req.params.id },
      data: req.body,
      include: {
         orderProducts:
         {
            include: {
               product: true
            }
         }
      }
   })

   res.status(200).json(new OrderResource(updatedOrder, {}))
})