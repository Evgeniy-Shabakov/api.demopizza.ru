import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { countryAdminReply } from './country.admin.reply.js'
import { countryAdminBody } from './country.admin.body.js'

export const countryAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(countryAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: countryAdminReply
         })
      }
   },
   create: {
      body: countryAdminBody,
      response: {
         201: z.object({
            data: countryAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: countryAdminBody,
      response: {
         200: z.object({
            data: countryAdminReply
         })
      }
   },
   delete: {
      params: idRequestSchema,
      response: {
         204: z.null()
      }
   }
}
