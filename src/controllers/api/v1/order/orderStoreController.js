import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"
import { ORDER_STATUS } from "#constants/api/v1/dataTypes/orderStatus.js"
import { generateOrderNumber, getRestaurantIdByRequest } from '#utils/api/v1/orderHelper.js'
import { PAYMENT_STATUS_TYPE } from '#constants/api/v1/dataTypes/paymentStatusType.js'

export const orderStoreController = baseController(async (req, res) => {

   const restaurantId = await getRestaurantIdByRequest(req)
   
   //нужно проверять цену в  orderProducts, либо устанавливать самостоятельно

   const record = await prisma.order.create({
      data: {
         ...req.body,

         number: generateOrderNumber(req.body.orderTypeId),
         orderStatus: ORDER_STATUS.CREATED,
         paymentStatus: PAYMENT_STATUS_TYPE.NO_PAID,
         restaurantId: restaurantId,

         orderProducts: { create: req.body.orderProducts }
      },
      include: {
         orderProducts: {
            include: {
               product: true
            }
         }
      }
   })

   res.status(201).json(new OrderResource(record, {}))
})