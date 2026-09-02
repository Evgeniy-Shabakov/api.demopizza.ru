import { z } from 'zod'

export const designAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(100),
   isActive: z.boolean(),
   settings: z.json()
})
