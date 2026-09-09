import { z } from 'zod'
import { orderClientReply } from '../order.client.reply.js'

export const orderClientSchemaActive = {

   response: {
      200: z.object({
         data: z.array(orderClientReply)
      })
   }

}