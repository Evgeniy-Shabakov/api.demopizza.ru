import { z } from 'zod'

export const promocodeAdminReply = z.object({
   id: z.number().int(),

   code: z.string(),

   description: z.string().nullable(),
   bonusCoins: z.coerce.number(),
   isActive: z.boolean(),

   employeeId: z.number().int(),
   userId: z.number().int().nullable(),
   usedAt: z.date().nullable(),

     employee: z.object({
        phone: z.string(),
        firstName: z.string().nullable(),
        lastName: z.string().nullable()
     }).nullish(),

     user: z.object({
        phone: z.string()
     }).nullish(),

   createdAt: z.date(),
   updatedAt: z.date()
})
