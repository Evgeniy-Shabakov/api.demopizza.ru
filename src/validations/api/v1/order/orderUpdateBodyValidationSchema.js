import { z } from 'zod'
import { ORDER_STATUS } from '#constants/api/v1/dataTypes/orderStatus.js'
import { PAYMENT_STATUS_TYPE } from '#constants/api/v1/dataTypes/paymentStatusType.js'

export const orderUpdateBodyValidationSchema = z.object({

   cityId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .optional(),

   restaurantId: z
      .int('Должен быть целым числом')
      .min(1, 'Должен быть положительным целым числом')
      .optional(),

   orderStatus: z
      .enum([ORDER_STATUS.CANCEL], 'Недопустимое значение')
      .optional(),

   paymentStatus: z
      .enum([PAYMENT_STATUS_TYPE.NO_PAID, PAYMENT_STATUS_TYPE.PAID], 'Недопустимое значение')
      .optional(),

   responsibleEmployeeComment: z
      .string().trim()
      .min(1, 'Тип оплаты должно быть от 1 до 500 символов')
      .max(500, 'Тип оплаты должно быть от 1 до 500 символов')
      .nullish(),

}).strict()