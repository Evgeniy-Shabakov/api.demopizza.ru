import { prisma } from "#lib/prisma.js"
import { PAYMENT_TYPE } from "#constants/v1/data-types/payment-type.js"
import { ORDER_STATUS } from "#constants/v1/data-types/order-status.js"
import { PAYMENT_STATUS } from "#constants/v1/data-types/payment-status.js"
import { createPayment } from "#modules/v1/payment/payment.service.js"
import { reserveBonusCoins, spendBonusCoins } from "#modules/v1/shared/bonus-coins.service.js"
import { generateOrderNumber, getRestaurantIdByRequest } from "./order.client.helper.js"

export async function orderClientCreateService(data) {

   if (data.bonusCoinsPaid > 0 || data.bonusCoinsEarned > 0) {
      if (!data.userId) {
         throw new Error('Бонусы не могут быть начислены или списаны без указания пользователя')
      }

      const company = await prisma.company.findFirstOrThrow()

      if (!company.options.isBonusCoinsEnabled) {
         throw new Error('Бонусная программа отключена')
      }
   }

   // проверять баллы которые надо списать и начислить
   // нужно проверять цену в  orderProducts, либо устанавливать самостоятельно

   const restaurantId = await getRestaurantIdByRequest(data)
   const orderNumber = generateOrderNumber(data.orderTypeId)

   let payment

   if (data.paymentTypeId == PAYMENT_TYPE.ONLINE.ID) {
      payment = await createPayment({
         value: data.totalPrice,
         description: `Заказ: №${orderNumber} от ${new Date().toLocaleString()}`,
         returnUrl: `${process.env.CLIENT_URL}/order-status`
      })
   }

   const record = await prisma.$transaction(async (tx) => {

      if (data.bonusCoinsPaid > 0) {
         await reserveBonusCoins(data.userId, data.bonusCoinsPaid, tx)
      }

      const order = await tx.order.create({
         data: {
            ...data,

            number: orderNumber,
            orderStatusId: ORDER_STATUS.CREATED.ID,
            paymentStatusId: PAYMENT_STATUS.NO_PAID.ID,
            restaurantId: restaurantId,
            paymentId: payment?.id,

            orderProducts: { create: data.orderProducts }
         },
         include: {
            orderProducts: {
               include: {
                  product: true
               }
            },
            user: { select: { phone: true } },
            city: { select: { name: true } },
            restaurant: {
               select: {
                  name: true,
                  address: true
               },
            },
            deliveryZone: { select: { name: true } },
            address: {
               select:
               {
                  name: true,
                  street: true,
                  house: true,
                  corps: true,
                  flat: true,
                  entrance: true,
                  floor: true,
                  entranceCode: true,
                  comment: true,
                  addressAsString: true,
               }
            },
            payment: {
               select:
               {
                  paymentUrl: true
               }
            }
         }
      })

      if (data.bonusCoinsPaid > 0) {
         await spendBonusCoins({
            userId: data.userId,
            amount: data.bonusCoinsPaid,
            orderId: order.id,
            reason: "Создание заказа",
            tx
         })
      }

      return order
   })

   return {
      order: record,
      payment
   }
}