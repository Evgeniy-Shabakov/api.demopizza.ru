import { z } from 'zod'

export const paymentClientReply = z.object({
   id: z.number().int().optional(),
   provider: z.string().optional(),
   providerPaymentId: z.string().nullable().optional(),
   status: z.string().optional(),

   amount: z.coerce.number().optional(),
   currency: z.string().optional(),

   description: z.string().nullable().optional(),
   returnUrl: z.string().nullable().optional(),
   paymentUrl: z.string().nullable().optional(),

   paidAt: z.date().nullable().optional(),
   confirmedAt: z.date().nullable().optional(),

   createdAt: z.date().optional(),
   updatedAt: z.date().optional()
})