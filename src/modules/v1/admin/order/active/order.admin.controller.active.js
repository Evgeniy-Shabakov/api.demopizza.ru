import { orderAdminServiceActive } from "./order.admin.service.active.js"

export async function orderAdminControllerActive(request, reply) {
   const { cityId, restaurantId } = request.query

   const records = await orderAdminServiceActive(cityId, restaurantId)

   return {
      data: records,
      meta: {
         filter: {
            ...(cityId && { cityId }),
            ...(restaurantId && { restaurantId })
         }
      }
   }
}
