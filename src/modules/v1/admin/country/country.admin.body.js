import { z } from 'zod'

export const countryAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(100),
})
