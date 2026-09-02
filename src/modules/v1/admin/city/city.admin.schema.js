import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { cityAdminReply } from './city.admin.reply.js'
import { cityAdminBody } from './city.admin.body.js'

export const cityAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(cityAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: cityAdminReply
         })
      }
   },
   create: {
      body: cityAdminBody,
      response: {
         201: z.object({
            data: cityAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: cityAdminBody,
      response: {
         200: z.object({
            data: cityAdminReply
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
