import { orderClientServiceLast } from "./order.client.last.service.js"

export async function orderClientControllerLast(request, reply) {
   const record = await orderClientServiceLast(request.user.id)

   return {
      data: record
   }
}