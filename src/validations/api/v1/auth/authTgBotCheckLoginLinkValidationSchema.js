import { z } from 'zod'

export const authTgBotCheckLoginLinkValidationSchema = z.object({
   authTgBotLoginLink: z
      .string().trim()
      .min(10, 'Слишком мало символов')
      .max(150, 'Слишком много символов'),

   authTgBotLoginSessionID: z
      .string().trim()
      .min(10, 'Слишком мало символов')
      .max(150, 'Слишком много символов'),
}).strict()