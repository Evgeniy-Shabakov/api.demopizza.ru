import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { legalDocumentClientReply } from './legal-document.client.reply.js'

export const legalDocumentClientSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(legalDocumentClientReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: legalDocumentClientReply
         })
      }
   },
}
