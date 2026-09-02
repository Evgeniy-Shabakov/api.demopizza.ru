import { z } from 'zod'
import { promocodeAdminReply } from '../promocode.admin.reply.js'
import { promocodeAdminCreateBody } from './promocode.admin.create.body.js'

export const promocodeAdminCreateSchema = {
   body: promocodeAdminCreateBody,

   response: {
      201: z.object({
         data: promocodeAdminReply
      })
   }
}
