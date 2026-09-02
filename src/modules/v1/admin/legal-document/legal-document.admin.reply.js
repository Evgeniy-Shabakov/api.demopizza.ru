import { z } from 'zod'

export const legalDocumentAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),

   link: z.string().nullable(),
   isActive: z.boolean(),

   createdAt: z.date(),
   updatedAt: z.date()
})
