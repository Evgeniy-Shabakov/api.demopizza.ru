import { z } from 'zod'

export const dadataClientBody = z.strictObject({
   query: z.string().trim().min(2).max(200)
})