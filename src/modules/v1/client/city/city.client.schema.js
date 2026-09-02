import { z } from 'zod'
import { cityClientReply } from './city.client.reply.js'

export const cityClientSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(cityClientReply)
         })
      }
   },
}