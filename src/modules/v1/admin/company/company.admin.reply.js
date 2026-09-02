import { z } from 'zod'

export const companyAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),
   brandName: z.string(),
   tagline: z.string().nullable(),
   phoneForOrders: z.string().nullable(),
   
   legalData: z.any().nullable(),
   linksSocial: z.any().nullable(),
   options: z.any().nullable(),
   contacts: z.any().nullable(),

   createdAt: z.date(),
   updatedAt: z.date(),
})
