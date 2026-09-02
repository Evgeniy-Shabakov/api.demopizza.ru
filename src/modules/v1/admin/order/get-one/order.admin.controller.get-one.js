import { orderAdminServiceGetOne } from "./order.admin.service.get-one.js"

export async function orderAdminControllerGetOne(request, reply) {
  
   const record = await orderAdminServiceGetOne(request.params.id)

   return {
      data: record
   }
}
