import { z } from 'zod'
import { addressClientBody } from '../address.client.body.js'

export const orderClientCreateBody = z.strictObject({
   phone: z.string().trim().min(10).max(20),

   addressJson: addressClientBody.nullish(),

   userId: z
      .int('userId должен быть целым числом')
      .min(1, 'userId должен быть положительным целым числом')
      .nullish(),

   cityId: z
      .int({
         error: (issue) => issue.input === undefined
            ? 'Город обязятелен для заполнения'
            : 'cityId должен быть целым числом'
      })
      .min(1, 'cityId должен быть положительным целым числом'),

   deliveryZoneId: z
      .int('deliveryZoneId должен быть целым числом')
      .min(1, 'deliveryZoneId должен быть положительным целым числом')
      .nullish(),

   restaurantId: z
      .int('restaurantId должен быть целым числом')
      .min(1, 'restaurantId должен быть положительным целым числом')
      .nullish(),

   responsibleEmployeeId: z
      .int('responsibleEmployeeId должен быть целым числом')
      .min(1, 'responsibleEmployeeId должен быть положительным целым числом')
      .nullish(),

   courierId: z
      .int('courierId должен быть целым числом')
      .min(1, 'courierId должен быть положительным целым числом')
      .nullish(),

   addressId: z
      .int('addressId должен быть целым числом')
      .min(1, 'addressId должен быть положительным целым числом')
      .nullish(),

   orderTypeId: z
      .int({
         error: (issue) => issue.input === undefined
            ? 'Тип заказа обязятелен для заполнения'
            : 'orderTypeId должен быть целым числом'
      })
      .min(1, 'orderTypeId должен быть от 1 до 6')
      .max(6, 'orderTypeId должен быть от 1 до 6'),

   tableNumber: z
      .string().trim()
      .min(1, 'Название должно быть от 1 до 100 символов')
      .max(100, 'Название должно быть от 1 до 100 символов')
      .nullish(),

   carNumber: z
      .string().trim()
      .min(1, 'Название должно быть от 1 до 100 символов')
      .max(100, 'Название должно быть от 1 до 100 символов')
      .nullish(),

   packTakeaway: z
      .boolean('Должен быть булевым значением')
      .nullish(),

   leaveAtTheDoor: z
      .boolean('Должен быть булевым значением')
      .nullish(),

   dontRingDoorbell: z
      .boolean('Должен быть булевым значением')
      .nullish(),

   totalProductsPrice: z
      .number()
      .nonnegative('Не может быть отрицательным числом'),

   deliveryPrice: z
      .number()
      .nonnegative('Не может быть отрицательным числом'),

   bonusCoinsPaid: z
      .number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   totalPrice: z
      .number()
      .min(1, 'Итоговая сумма заказа не может быть меньше 1р')
      .nonnegative('Не может быть отрицательным числом'),

   bonusCoinsEarned: z
      .number()
      .nonnegative('Не может быть отрицательным числом')
      .nullish(),

   paymentTypeId: z
      .int({
         error: (issue) => issue.input === undefined
            ? 'Тип оплаты обязятелен для заполнения'
            : 'paymentTypeId должен быть целым числом'
      })
      .min(1, 'paymentTypeId должен быть от 1 до 4')
      .max(4, 'paymentTypeId должен быть от 1 до 4'),

   banknoteForChange: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   userComment: z
      .string().trim()
      .min(1, 'Тип оплаты должно быть от 1 до 500 символов')
      .max(500, 'Тип оплаты должно быть от 1 до 500 символов')
      .nullish(),

   responsibleEmployeeComment: z
      .string().trim()
      .min(1, 'Тип оплаты должно быть от 1 до 500 символов')
      .max(500, 'Тип оплаты должно быть от 1 до 500 символов')
      .nullish(),

   options: z
      .json('Данные должны быть в json формате')
      .nullish(),

   orderProducts: z
      .array(z.object({
         productId: z.int().min(1),
         quantity: z.int().min(1),
         price: z.coerce.number().nonnegative('Не может быть отрицательным числом'),
      }))
})
