import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { orderAdminReply } from '../order.admin.reply.js'
import { orderAdminBodyUpdate } from './order.admin.body.update.js'

export const orderAdminSchemaUpdate = {

   params: idRequestSchema,

   body: orderAdminBodyUpdate,
   
   response: {
      200: z.object({
         data: orderAdminReply,
      })
   }

}
