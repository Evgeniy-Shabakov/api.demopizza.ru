import { z } from 'zod'

export const categoryBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название: минимум 2 символа')
      .max(100, 'Название: максимум 100 символов'),

   position: z
      .int('Позиция: должно быть целым числом')
      .min(1, 'Позиция: минимум 1')
      .max(1000, 'Позиция: максимум 1000')
      .nullish()
}).strict()