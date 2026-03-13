import { z } from 'zod'

export const promocodeActivateBodyValidationSchema = z.object({
   code: z
      .string().trim()
      .min(8, 'Промокод должен быть от 8 до 50 символов')
      .max(50, 'Название должно быть от 8 до 50 символов')
}).strict()