import { z } from 'zod'

export const userBodyValidationSchema = z.object({
   phone: z
      .string().trim()
      .min(10, 'Мало символов')
      .max(20, 'Много символов'),

   email: z
      .email('email - неверный формат')
      .nullish(),

   password: z
      .string().trim()
      .min(8, 'Минимум 8 символов')
      .nullish(),

   firstName: z
      .string().trim()
      .min(1, 'Мало символов')
      .max(50, 'Много символов')
      .nullish(),

   lastName: z
      .string().trim()
      .min(1, 'Мало символов')
      .max(50, 'Много символов')
      .nullish(),

   middleName: z
      .string().trim()
      .min(1, 'Мало символов')
      .max(50, 'Много символов')
      .nullish(),

   nickname: z
      .string().trim()
      .min(1, 'Мало символов')
      .max(50, 'Много символов')
      .nullish(),

   job: z
      .string().trim()
      .min(1, 'Мало символов')
      .max(100, 'Много символов')
      .nullish(),
}).strict()