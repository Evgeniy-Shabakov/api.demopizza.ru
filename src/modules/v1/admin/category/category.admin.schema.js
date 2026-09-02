import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { categoryAdminReply } from './category.admin.reply.js'
import { categoryAdminBody } from './category.admin.body.js'

export const categoryAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(categoryAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: categoryAdminReply
         })
      }
   },
   create: {
      body: categoryAdminBody,
      response: {
         201: z.object({
            data: categoryAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: categoryAdminBody,
      response: {
         200: z.object({
            data: categoryAdminReply
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
