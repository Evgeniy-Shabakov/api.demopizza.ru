import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"
import { ORDER_TYPE } from '#constants/api/v1/dataTypes/orderType.js'
import { ORDER_STATUS } from '#constants/api/v1/dataTypes/orderStatus.js'

export const orderNextStatusController = baseController(async (req, res) => {

   const order = await prisma.order.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   if(order.orderStatus == ORDER_STATUS.COMPLETED || order.orderStatus == ORDER_STATUS.CANCEL) {
      throw new Error('Заказ уже находится в финальном статусе')
   }

   const orderType = Object.values(ORDER_TYPE).find((type) => type.ID === order.orderTypeId)

   const currentStatusIndex = orderType.STATUSES.indexOf(order.orderStatus)

   if (currentStatusIndex === -1) {
      throw new Error(`Текущий статус "${order.orderStatus}" недопустим для заказов типа "${orderType.NAME}"`)
   }

   const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: { orderStatus: orderType.STATUSES[currentStatusIndex + 1] },
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