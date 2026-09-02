import { orderAdminServiceList } from "./order.admin.service.list.js"

export async function orderAdminControllerList(request, reply) {

   const { page, perPage, cityId, restaurantId } = request.query

   const { records, pagination } = await orderAdminServiceList({
      page,
      perPage,
      cityId,
      restaurantId
   })

   return {
      data: records,
      meta: {
         pagination,
         filter: {
            ...(cityId && { cityId }),
            ...(restaurantId && { restaurantId })
         }
      }
   }

}