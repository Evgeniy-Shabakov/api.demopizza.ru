import { z } from 'zod'
import { orderAdminReply } from '../order.admin.reply.js'
import { paginationReplySchema } from '#modules/v1/shared/schemas/pagination.reply.schema.js'

export const orderAdminSchemaList = {

   querystring: z.strictObject({
      page: z.coerce.number().optional(),
      perPage: z.coerce.number().optional(),
      cityId: z.coerce.number().optional(),
      restaurantId: z.coerce.number().optional()
   }),

   response: {
      200: z.object({
         data: z.array(orderAdminReply),
         meta: z.object({
            pagination: paginationReplySchema,
            filter: z.object({
               cityId: z.number().optional(),
               restaurantId: z.number().optional()
            })
         })
      })
   }

}
