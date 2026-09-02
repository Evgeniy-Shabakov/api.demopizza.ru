import { z } from 'zod'
import { authClientLoginBody } from './auth.client.login.body.js'
import { userClientReply } from '../../user.client.reply.js'

export const authClientLoginSchema = {

   body: authClientLoginBody,

   response: {
      200: z.object({
         data: userClientReply
      })
   }

}
