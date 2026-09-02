import { z } from 'zod'
import { companyClientReply } from './company.client.reply.js'

export const companyClientSchema = {
   get: {
      response: {
         200: z.object({
            data: companyClientReply
         })
      }
   },
}
