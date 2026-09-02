import { z } from 'zod'
import { dadataClientBody } from './dadata.client.body.js'
import { dadataClientReply } from './dadata.client.reply.js'

export const dadataClientSchema = {
   suggestions: {
      body: dadataClientBody,
      response: {
         200: z.object({
            data: z.array(dadataClientReply)
         })
      }
   }
}