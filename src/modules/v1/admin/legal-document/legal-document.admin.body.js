import { z } from 'zod'

export const legalDocumentAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(255),
   link: z.string().trim().min(2).max(1000).nullish(),
   isActive: z.coerce.boolean()
})
