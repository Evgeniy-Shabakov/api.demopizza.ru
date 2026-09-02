import { prisma } from '#lib/prisma.js'
import { ORDER_TYPE } from '#constants/v1/data-types/order-type.js'
import { ORDER_STATUS } from '#constants/v1/data-types/order-status.js'
import { addBonusCoins, spendBonusCoins } from '#modules/v1/shared/bonus-coins.service.js'

export async function orderAdminServicePreviousStatus(id) {
   const order = await prisma.order.findUniqueOrThrow({ where: { id } })

   if (order.orderStatusId == ORDER_STATUS.CREATED.ID) {
      throw new Error('Заказ уже находится в начальном статусе')
   }

   let newStatus

   if (order.orderStatusId == ORDER_STATUS.CANCEL.ID) {
      newStatus = ORDER_STATUS.CREATED
   }
   else {
      const orderType = Object.values(ORDER_TYPE).find((type) => type.ID === order.orderTypeId)

      const currentStatusIndex = orderType.STATUSES.findIndex(status => status.ID === order.orderStatusId)

      if (currentStatusIndex === -1) {
         throw new Error(`Текущий статус "${order.orderStatusId}" недопустим для заказов типа "${orderType.NAME}"`)
      }

      newStatus = orderType.STATUSES[currentStatusIndex - 1]
   }


   const record = await prisma.$transaction(async (tx) => {

      const updatedOrder = await tx.order.update({
         where: { id: order.id },
         data: { orderStatusId: newStatus.ID },
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

      if (order.orderStatusId == ORDER_STATUS.COMPLETED.ID && order.bonusCoinsEarned > 0) {
         await spendBonusCoins({
            userId: order.userId,
            amount: order.bonusCoinsEarned,
            orderId: order.id,
            reason: "Возврат из статуса: завершение заказа",
            tx
         })
      }

      if (order.orderStatusId == ORDER_STATUS.CANCEL.ID && order.bonusCoinsPaid > 0) {
         await spendBonusCoins({
            userId: order.userId,
            amount: order.bonusCoinsPaid,
            orderId: order.id,
            reason: "Возврат из статуса: отмена заказа",
            tx
         })
      }

      return updatedOrder
   })

   return record
}