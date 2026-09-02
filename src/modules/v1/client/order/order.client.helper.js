import { prisma } from '#lib/prisma.js'
import { ORDER_TYPE } from '#constants/v1/data-types/order-type.js'

export function generateOrderNumber(orderTypeId) {
   const orderType = Object.values(ORDER_TYPE).find(type => type.ID == orderTypeId)

   const randomNum = Math.floor(Math.random() * 900) + 100

   if (!orderType || !orderType.ORDER_NUMBER_PREFIX) {
      return randomNum.toString()
   }

   return `${orderType.ORDER_NUMBER_PREFIX}-${randomNum}`
}

export async function getRestaurantIdByRequest(data) {
   if (data.orderTypeId != ORDER_TYPE.DELIVERY_TO_ADDRESS.ID) {
      return data.restaurantId
   }

   const deliveryZone = await prisma.deliveryZone.findUniqueOrThrow({
      where: { id: data.deliveryZoneId },
   })

   return deliveryZone.restaurantId
}


const orderTypeNameMap = new Map(
   Object.values(ORDER_TYPE).map(type => [type.ID, type.NAME])
)

export function getOrderTypeNameById(id) {
   return orderTypeNameMap.get(id)
}