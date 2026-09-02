import { z } from 'zod'
import { companyAdminReply } from './company.admin.reply.js'
import { companyAdminBody } from './company.admin.body.js'

export const companyAdminSchema = {
   get: {
      response: {
         200: z.object({
            data: companyAdminReply
         })
      }
   },
   update: {
      body: companyAdminBody,
      response: {
         200: z.object({
            data: companyAdminReply
         })
      }
   }
}
