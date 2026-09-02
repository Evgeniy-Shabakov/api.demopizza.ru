import { prisma } from '#lib/prisma.js'
import { ORDER_STATUS } from '#constants/v1/data-types/order-status.js'
import { ORDER_TYPE } from '#constants/v1/data-types/order-type.js'
import { addBonusCoins } from '#modules/v1/shared/bonus-coins.service.js'

export async function orderAdminServiceNextStatus(id) {
   const order = await prisma.order.findUniqueOrThrow({ where: { id } })

   if (order.orderStatusId == ORDER_STATUS.COMPLETED.ID || order.orderStatusId == ORDER_STATUS.CANCEL.ID) {
      throw new Error('Заказ уже находится в финальном статусе')
   }

   const orderType = Object.values(ORDER_TYPE).find((type) => type.ID === order.orderTypeId)

   const currentStatusIndex = orderType.STATUSES.findIndex(status => status.ID === order.orderStatusId)

   if (currentStatusIndex === -1) {
      throw new Error(`Текущий статус "${order.orderStatusId}" недопустим для заказов типа "${orderType.NAME}"`)
   }

   const nextStatus = orderType.STATUSES[currentStatusIndex + 1]

   const record = await prisma.$transaction(async (tx) => {

      const updatedOrder = await tx.order.update({
         where: { id: order.id },
         data: { orderStatusId: nextStatus.ID },
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

      if (nextStatus.ID == ORDER_STATUS.COMPLETED.ID && order.bonusCoinsEarned > 0) {
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


   return record
}