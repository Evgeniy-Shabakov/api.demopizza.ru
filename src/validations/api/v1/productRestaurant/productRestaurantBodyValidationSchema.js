import { z } from 'zod'

export const productRestaurantBodyValidationSchema = z.object({
   productId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   restaurantId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   isInStopList: z
      .boolean('Статус стоп-листа быть булевым значением')
}).strict()