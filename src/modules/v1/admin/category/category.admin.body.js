import { z } from 'zod'

export const categoryAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(100),

   position: z
      .number()
      .int()
      .nonnegative()
      .nullish(),
})
