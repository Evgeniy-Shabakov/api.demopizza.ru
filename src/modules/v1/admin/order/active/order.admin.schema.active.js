import { z } from 'zod'
import { orderAdminReply } from '../order.admin.reply.js'

export const orderAdminSchemaActive = {

   querystring: z.strictObject({
      cityId: z.coerce.number().optional(),
      restaurantId: z.coerce.number().optional()
   }),

   response: {
      200: z.object({
         data: z.array(orderAdminReply),
         meta: z.object({
            filter: z.object({
               cityId: z.number().optional(),
               restaurantId: z.number().optional()
            })
         })
      })
   }

}
