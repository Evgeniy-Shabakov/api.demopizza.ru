import { z } from 'zod'

export const categoryAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),

   position: z.number().int().nullable(),

   createdAt: z.date(),
   updatedAt: z.date()
})
