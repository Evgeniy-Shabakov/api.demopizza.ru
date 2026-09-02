import { z } from 'zod'
import { designClientReply } from './design.client.reply.js'

export const designClientSchema = {
   getActive: {
      response: {
         200: z.object({
            data: designClientReply
         })
      }
   },
}
