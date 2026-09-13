import { z } from 'zod'
import { orderClientReply } from '../order.client.reply.js'

export const orderClientSchemaLast = {

   response: {
      200: z.object({
         data: orderClientReply.nullable()
      })
   }

}