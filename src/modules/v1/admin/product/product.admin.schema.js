import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { productAdminReply } from './product.admin.reply.js'
import { productAdminBody } from './product.admin.body.js'

export const productAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(productAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: productAdminReply
         })
      }
   },
   create: {
      body: productAdminBody,
      response: {
         201: z.object({
            data: productAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: productAdminBody,
      response: {
         200: z.object({
            data: productAdminReply
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
