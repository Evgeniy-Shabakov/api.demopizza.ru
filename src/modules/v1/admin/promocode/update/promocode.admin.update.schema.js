import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { promocodeAdminUpdateBody } from './promocode.admin.update.body.js'
import { promocodeAdminReply } from '../promocode.admin.reply.js'

export const promocodeAdminUpdateSchema = {
   params: idRequestSchema,

   body: promocodeAdminUpdateBody,

   response: {
      200: z.object({
         data: promocodeAdminReply
      })
   }
}
