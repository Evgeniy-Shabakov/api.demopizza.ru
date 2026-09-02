import { orderAdminServiceNextStatus } from "./order.admin.service.next-status.js"

export async function orderAdminControllerNextStatus(request, reply) {
  
   const record = await orderAdminServiceNextStatus(request.params.id)

   return {
      data: record
   }
}
