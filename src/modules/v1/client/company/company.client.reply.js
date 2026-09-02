import { z } from 'zod'

export const companyClientReply = z.object({
   name: z.string(),
   brandName: z.string(),
   tagline: z.string().nullable(),
   phoneForOrders: z.string().nullable(),

   legalData: z.any().nullable(),
   options: z.any().nullable(),
})
