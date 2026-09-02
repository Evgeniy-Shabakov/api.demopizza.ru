import { orderAdminServiceList } from "../list/order.admin.service.list.js"
import { orderAdminServiceActive } from "../active/order.admin.service.active.js"
import { orderAdminServiceCount } from "./order.admin.service.count.js"


export async function orderAdminControllerCount(request, reply) {

   const count = await orderAdminServiceCount()

   return {
      data: count
   }

}