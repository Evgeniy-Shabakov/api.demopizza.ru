import { z } from 'zod'
import { addressClientBody } from '../address.client.body.js'
import { addressClientReply } from '../address.client.reply.js'

export const addressClientCreateSchema = {
   body: addressClientBody,

   response: {
      201: z.object({
         data: addressClientReply
      })
   }
}