import { z } from 'zod'
import { PAYMENT_TYPE } from '#constants/api/v1/dataTypes/paymentType.js'
import { PAYMENT_STATUS_TYPE } from '#constants/api/v1/dataTypes/paymentStatusType.js'

export const orderCreateBodyValidationSchema = z.object({

   userId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   cityId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом'),

   deliveryZoneId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   restaurantId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   responsibleEmployeeId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   courierId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   userAddressId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   orderTypeId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть от 1 до 6')
      .max(6, 'Должен быть от 1 до 6'),

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
      .nonnegative('Не может быть отрицательным числом'),

   totalPrice: z
      .number()
      .min(1, 'Итоговая сумма заказа не может быть меньше 1р')
      .nonnegative('Не может быть отрицательным числом'),

   bonusCoinsEarned: z
      .number()
      .nonnegative('Не может быть отрицательным числом'),

   paymentType: z
      .enum(Object.values(PAYMENT_TYPE), 'Недопустимое значение'),

   banknoteForChange: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .nullish(),

   paymentStatus: z
      .enum([PAYMENT_STATUS_TYPE.NO_PAID, PAYMENT_STATUS_TYPE.PAID], 'Недопустимое значение')
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

}).strict()