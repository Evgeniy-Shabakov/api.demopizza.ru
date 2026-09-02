import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { promocodeAdminReply } from '../promocode.admin.reply.js'

export const promocodeAdminGetOneSchema = {
   params: idRequestSchema,

   response: {
      200: z.object({
         data: promocodeAdminReply
      })
   }
}
