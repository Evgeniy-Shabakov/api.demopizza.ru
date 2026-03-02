import { z } from 'zod'

export const legalDocumentBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 255 символов')
      .max(255, 'Название должно быть от 2 до 255 символов'),

   docFile: z.enum(['undefined', 'null']).nullish(), //файл валидируется в multer

   link: z
      .string().trim()
      .min(2, 'Ссылка должна быть от 2 до 1000 символов')
      .max(1000, 'Сыылка должна быть от 2 до 1000 символов')
      .nullish(),

   htmlContent: z
      .string().trim()
      .min(2)
      .nullish(),

   description: z
      .string().trim()
      .min(2, 'Описание должно быть от 2 до 2000 символов')
      .max(2000, 'Описание должно быть от 2 до 2000 символов')
      .nullish(),

   isActive: z.coerce
      .boolean('Статус активности должен быть булевым значением')
}).strict()