import { orderClientServiceHistory } from "./order.client.history.service.js"

export async function orderClientControllerHistory(request, reply) {
   const records = await orderClientServiceHistory(request.user.id)

   return {
      data: records
   }
}