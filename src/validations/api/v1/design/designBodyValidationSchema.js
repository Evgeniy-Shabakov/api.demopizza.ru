import { z } from 'zod'

export const designBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 100 символов')
      .max(100, 'Название должно быть от 2 до 100 символов'),

   isActive: z
      .boolean('Статус активности должен быть булевым значением'),

   settings: z
      .json('Данные обязательны для заполнения, должны быть в json формате')
}).strict()