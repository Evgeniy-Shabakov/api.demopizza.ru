import { z } from 'zod'
import { categoryClientReply } from './category.client.reply.js'

export const categoryClientSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(categoryClientReply)
         })
      }
   },
}
