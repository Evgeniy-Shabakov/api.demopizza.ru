import { z } from 'zod'

export const designAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),

   isActive: z.boolean(),
   settings: z.any(),

   createdAt: z.date(),
   updatedAt: z.date()
})
