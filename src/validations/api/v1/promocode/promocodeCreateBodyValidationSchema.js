import { z } from 'zod'

export const promocodeCreateBodyValidationSchema = z.object({
    bonusCoins: z
      .number()
      .nonnegative('Не может быть отрицательным числом'),

   description: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 255 символов')
      .max(255, 'Название должно быть от 2 до 255 символов')
      .optional()
}).strict()