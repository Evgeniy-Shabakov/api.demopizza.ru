import { z } from 'zod'

export const deliveryZoneBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 100 символов')
      .max(100, 'Название должно быть от 2 до 100 символов'),

   cityId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   restaurantId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   minOrderValueForDelivery: z
      .coerce.number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   deliveryPrice: z
      .coerce.number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   orderValueForFreeDelivery: z
      .coerce.number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   geojsonFeature: z
      .json('Данные обязательны для заполнения, должны быть в json формате'),

   isActive: z
      .boolean('Статус активности должен быть булевым значением')
}).strict()