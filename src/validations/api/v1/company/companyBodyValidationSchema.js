import { z } from 'zod'

export const companyBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 255 символов')
      .max(255, 'Название должно быть от 2 до 255 символов'),

   brandName: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 255 символов')
      .max(255, 'Название должно быть от 2 до 255 символов'),

   tagline: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 255 символов')
      .max(255, 'Название должно быть от 2 до 255 символов')
      .nullish(),

   logoFile: z.enum(['undefined', 'null']).nullish(), //файл валидируется в multer

   faviconFile: z.enum(['undefined', 'null']).nullish(), //файл валидируется в multer

   phoneForOrders: z
      .string().trim()
      .min(10, 'Мало символов')
      .max(30, 'Много символов')
      .nullish(),

   aboutUs: z
      .string().trim()
      .min(2)
      .nullish(),

   contacts: z
      .string().trim()
      .min(2)
      .nullish(),

   linksSocial: z
      .json('Должны быть в json формате')
      .nullish()

}).strict()