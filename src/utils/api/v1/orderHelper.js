import { ORDER_TYPE } from "#constants/api/v1/dataTypes/orderType.js";
import { prisma } from '#services/prismaClient.js'

export function generateOrderNumber(orderTypeId) {
   const orderType = Object.values(ORDER_TYPE).find(type => type.ID == orderTypeId)

   const randomNum = Math.floor(Math.random() * 900) + 100

   if (!orderType || !orderType.ORDER_NUMBER_PREFIX) {
      return randomNum.toString()
   }

   return `${orderType.ORDER_NUMBER_PREFIX}-${randomNum}`
}

export async function getRestaurantIdByRequest(req) {
   if (req.body.orderTypeId != ORDER_TYPE.DELIVERY_TO_ADDRESS.ID) {
      return req.body.restaurantId
   }

   const deliveryZone = await prisma.deliveryZone.findUniqueOrThrow({
      where: { id: req.body.deliveryZoneId },
   })

   return deliveryZone.restaurantId
}

const orderTypeNameMap = new Map(
   Object.values(ORDER_TYPE).map(type => [type.ID, type.NAME])
)

export function getOrderTypeNameById(id) {
   return orderTypeNameMap.get(id)
}