import { z } from 'zod'

export const dadataClientReply = z.object({
   value: z.string(),
   city: z.string().nullable(),
   cityWithType: z.string().nullable(),
   street: z.string().nullable(),
   house: z.string().nullable(),
   flat: z.string().nullable(),
   latitude: z.string().nullable(),
   longitude: z.string().nullable(),
})