import { z } from 'zod'

export const productBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 100 символов')
      .max(100, 'Название должно быть от 2 до 100 символов'),

   categoryId: z.coerce.number()
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   priceDefault: z.coerce.number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   descriptionShort: z
      .string().trim()
      .min(2, 'Короткое описание должно быть от 2 до 100 символов')
      .max(255, 'Короткое описание должно быть от 2 до 255 символов')
      .catch('')
      .transform((val) => (val === '' ? null : val))
      .nullish(),

   descriptionFull: z
      .string().trim()
      .min(2, 'Полное описание должно быть от 2 до 100 символов')
      .max(2000, 'Полное описание должно быть от 2 до 2000 символов')
      .catch('')
      .transform((val) => (val === '' ? null : val))
      .nullish(),

   positionInCategory: z.preprocess(
      (val) => {
         if (val == 'null' || val == 'undefined' || val === '') {
            return null
         }
         return Number(val)
      },
      z.number()
         .int('Позиция: должно быть целым числом')
         .min(1, 'Позиция: минимум 1')
         .max(1000, 'Позиция: максимум 1000')
         .nullish()
   ),

   imageFile: z.enum(['undefined', 'null']).nullish(), //файл фалидируется в multer

   isActive: z.coerce
      .boolean('Статус активности должен быть булевым значением')
}).strict()