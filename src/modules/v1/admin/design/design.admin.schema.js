import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { designAdminReply } from './design.admin.reply.js'
import { designAdminBody } from './design.admin.body.js'

export const designAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(designAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: designAdminReply
         })
      }
   },
   create: {
      body: designAdminBody,
      response: {
         201: z.object({
            data: designAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: designAdminBody,
      response: {
         200: z.object({
            data: designAdminReply
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
