import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"
import { ORDER_STATUS } from '#constants/api/v1/dataTypes/orderStatus.js'
import { reverseBonusCoinsForOrder } from '#services/bonusCoinsService.js'

export const orderUpdateController = baseController(async (req, res) => {

   const record = await prisma.$transaction(async (tx) => {

      const order = await tx.order.update({
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

      if (req.body.orderStatus == ORDER_STATUS.CANCEL) {
         await reverseBonusCoinsForOrder({
            orderId: order.id,
            reason: "Отмена заказа",
            tx
         })
      }

      return order
   })

   res.status(200).json(new OrderResource(record, {}))
})