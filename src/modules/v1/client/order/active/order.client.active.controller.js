import { orderClientServiceActive } from "./order.client.active.service.js"

export async function orderClientControllerActive(request, reply) {
   const records = await orderClientServiceActive(request.user.id)

   return {
      data: records
   }
}