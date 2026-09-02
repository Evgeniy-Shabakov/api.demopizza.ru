import { z } from 'zod'

export const legalDocumentClientReply = z.object({
   id: z.number().int(),
   name: z.string(),

   link: z.string().nullable(),
})
