import { orderAdminServicePreviousStatus } from "./order.admin.service.previous-status.js"

export async function orderAdminControllerPreviousStatus(request, reply) {
  
   const record = await orderAdminServicePreviousStatus(request.params.id)

   return {
      data: record
   }
}
