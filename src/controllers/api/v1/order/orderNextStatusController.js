import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"
import { ORDER_TYPE } from '#constants/api/v1/dataTypes/orderType.js'
import { ORDER_STATUS } from '#constants/api/v1/dataTypes/orderStatus.js'
import { addBonusCoins } from '#services/bonusCoinsService.js'

export const orderNextStatusController = baseController(async (req, res) => {

   const order = await prisma.order.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   if (order.orderStatus == ORDER_STATUS.COMPLETED || order.orderStatus == ORDER_STATUS.CANCEL) {
      throw new Error('Заказ уже находится в финальном статусе')
   }

   const orderType = Object.values(ORDER_TYPE).find((type) => type.ID === order.orderTypeId)

   const currentStatusIndex = orderType.STATUSES.indexOf(order.orderStatus)

   if (currentStatusIndex === -1) {
      throw new Error(`Текущий статус "${order.orderStatus}" недопустим для заказов типа "${orderType.NAME}"`)
   }

   const nextStatus = orderType.STATUSES[currentStatusIndex + 1]

   const record = await prisma.$transaction(async (tx) => {

      const updatedOrder = await tx.order.update({
         where: { id: order.id },
         data: { orderStatus: nextStatus },
         include: {
            orderProducts:
            {
               include: {
                  product: true
               }
            },
            user: true
         }
      })

      if (nextStatus == ORDER_STATUS.COMPLETED && order.bonusCoinsEarned > 0) {
         await addBonusCoins({
            userId: order.userId,
            amount: order.bonusCoinsEarned,
            orderId: order.id,
            reason: "Завершение заказа",
            tx
         })
      }

      return updatedOrder
   })


   res.status(200).json(new OrderResource(record, {}))
})