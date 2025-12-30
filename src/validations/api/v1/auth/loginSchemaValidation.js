import { z } from 'zod'

export const loginSchemaValidation = z.object({
   phone: z
      .string('Отсутствует обязательно поле').trim()
      .min(10, 'Слишком мало символов')
      .max(15, 'Слишком много символов'),

   password: z
      .string('Отсутствует обязательно поле').trim()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .max(40, 'Слишком много символов'),
}).strict()

