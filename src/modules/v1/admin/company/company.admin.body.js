import { z } from 'zod'

export const companyAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(255),
   brandName: z.string().trim().min(2).max(255),
   tagline: z.string().trim().min(2).max(255).nullish(),

   phoneForOrders: z.string().trim().min(10).max(30).nullish(),

   options: z.object({
      isBonusCoinsEnabled: z.boolean()
   }).nullish(),

   legalData: z.object({
      inn: z.string().trim().max(100),
      ogrnip: z.string().trim().max(100),
      address: z.string().trim().max(500),
      legalDataPhone: z.string().trim().max(30),
   }).nullish()
})
