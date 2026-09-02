import { z } from 'zod'

export const promocodeAdminCreateBody = z.strictObject({

   bonusCoins: z.number().positive(),
   description: z.string().trim().min(2).max(255).optional()

})