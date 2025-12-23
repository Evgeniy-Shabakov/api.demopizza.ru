import { z } from 'zod'

export const authTgBotCheckLoginLinkValidationSchema = z.object({
   authTgBotLoginLink: z
      .string('Отсутствует обязательно поле').trim()
      .min(10, 'Слишком мало символов')
      .max(150, 'Слишком много символов'),

   authTgBotLoginSessionID: z
      .string('Отсутствует обязательно поле').trim()
      .min(10, 'Слишком мало символов')
      .max(150, 'Слишком много символов'),
}).strict()