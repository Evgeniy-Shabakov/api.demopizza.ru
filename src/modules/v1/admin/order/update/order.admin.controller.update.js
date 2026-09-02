import { orderAdminServiceUpdate } from "./order.admin.service.update.js"

export async function orderAdminControllerUpdate(request, reply) {
  
   const record = await orderAdminServiceUpdate(request.params.id, request.body)

   return {
      data: record
   }
}
