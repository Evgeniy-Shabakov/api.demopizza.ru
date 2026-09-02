import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { orderAdminReply } from '../order.admin.reply.js'

export const orderAdminSchemaNextStatus = {

   params: idRequestSchema,

   response: {
      200: z.object({
         data: orderAdminReply,
      })
   }

}
