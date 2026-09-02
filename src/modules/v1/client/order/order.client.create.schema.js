import { z } from 'zod'
import { orderClientCreateBody } from './order.client.create.body.js'
import { orderClientReply } from './order.client.reply.js'
import { paymentClientReply } from '../payment.client.reply.js'


export const orderClientCreateSchema = {

   body: orderClientCreateBody,

   response: {
      201: z.object({
         data: orderClientReply,
         meta: z.object({
            payment: paymentClientReply.optional()
         })
      })
   }

}
