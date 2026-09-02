import { prisma } from '#lib/prisma.js'
import { ORDER_STATUS } from '#constants/v1/data-types/order-status.js'
import { reverseBonusCoinsForOrder } from '#modules/v1/shared/bonus-coins.service.js'

export async function orderAdminServiceUpdate(id, data) {
   const record = await prisma.$transaction(async (tx) => {

      const order = await tx.order.update({
         where: { id: id },
         data: data,
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

      if (data.orderStatusId == ORDER_STATUS.CANCEL.ID) {
         await reverseBonusCoinsForOrder({
            orderId: order.id,
            reason: "Отмена заказа",
            tx
         })
      }

      return order
   })

   return record
}