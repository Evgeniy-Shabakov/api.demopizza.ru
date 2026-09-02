import { z } from 'zod'
import { restaurantClientReply } from './restaurant.client.reply.js'

export const restaurantClientSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(restaurantClientReply)
         })
      }
   },
}
