import { z } from 'zod'
import { addressClientReply } from './address.client.reply.js'

export const userClientReply = z.object({
   id: z.number().int().optional(),

   phone: z.string().optional(),
   phoneVerifiedAt: z.date().nullable().optional(),
   email: z.string().nullable().optional(),
   emailVerifiedAt: z.date().nullable().optional(),
   nickname: z.string().nullable().optional(),
   bonusCoins: z.coerce.number().optional(),

   addresses: z.array(addressClientReply).optional()
})
