import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"
import { ORDER_STATUS } from "#constants/api/v1/dataTypes/orderStatus.js"
import { generateOrderNumber, getRestaurantIdByRequest } from '#utils/api/v1/orderHelper.js'
import { PAYMENT_STATUS_TYPE } from '#constants/api/v1/dataTypes/paymentStatusType.js'
import { reserveBonusCoins, updateBonusCoins } from '#services/bonusCoinsService.js'

export const orderStoreController = baseController(async (req, res) => {

   const restaurantId = await getRestaurantIdByRequest(req)

   // нужно проверять цену в  orderProducts, либо устанавливать самостоятельно

   const record = await prisma.$transaction(async (tx) => {

      if (req.body.bonusCoinsPaid > 0) {
         await reserveBonusCoins(req.body.userId, req.body.bonusCoinsPaid, tx)
      }

      const order = await tx.order.create({
         data: {
            ...req.body,

            number: generateOrderNumber(req.body.orderTypeId),
            orderStatus: ORDER_STATUS.CREATED,
            paymentStatus: PAYMENT_STATUS_TYPE.NO_PAID,
            restaurantId: restaurantId,

            orderProducts: { create: req.body.orderProducts }
         },
         include: { orderProducts: { include: { product: true } } }
      })

      if (req.body.bonusCoinsPaid > 0) {
         await updateBonusCoins({
            userId: req.body.userId,
            amount: -req.body.bonusCoinsPaid,
            orderId: order.id,
            reason: "Создание заказа",
            tx
         })
      }

      return order
   })

   res.status(201).json(new OrderResource(record, {}))
})