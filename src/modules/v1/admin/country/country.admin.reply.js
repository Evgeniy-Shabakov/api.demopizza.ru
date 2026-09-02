import { z } from 'zod'

export const countryAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),
   createdAt: z.date(),
   updatedAt: z.date(),
})
