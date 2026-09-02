import { z } from 'zod'
import { userClientReply } from '../../user.client.reply.js'

export const authClientMeSchema = {

   response: {
      200: z.object({
         data: userClientReply
      })
   }

}