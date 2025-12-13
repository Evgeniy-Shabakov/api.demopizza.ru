import { z } from 'zod'

export const cityBodyValidationSchema = z.object({
   name: z
      .string().trim()
      .min(2, 'Название должно быть от 2 до 100 символов')
      .max(100, 'Название должно быть от 2 до 100 символов'),

   countryId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   minOrderValueForDeliveryByDefault: z
      .number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   deliveryPriceByDefault: z
      .number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   orderValueForFreeDeliveryByDefault: z
      .number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   mapIframe: z
      .string().trim()
      .max(1000, 'Iframe карты должен быть до 1000 символов')
      .nullish(),

   geojson: z
      .json('Данные должны быть в json формате')
      .nullish(),

}).strict()