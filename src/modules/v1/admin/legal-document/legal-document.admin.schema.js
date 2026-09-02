import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { legalDocumentAdminReply } from './legal-document.admin.reply.js'
import { legalDocumentAdminBody } from './legal-document.admin.body.js'

export const legalDocumentAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(legalDocumentAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: legalDocumentAdminReply
         })
      }
   },
   create: {
      body: legalDocumentAdminBody,
      response: {
         201: z.object({
            data: legalDocumentAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: legalDocumentAdminBody,
      response: {
         200: z.object({
            data: legalDocumentAdminReply
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
