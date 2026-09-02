import { z } from 'zod'

export const authAdminLoginBody = z.strictObject({
   phone: z.string().trim()
      .min(10, 'Слишком мало символов')
      .max(15, 'Слишком много символов'),

   password: z.string().trim()
      .min(8, 'Пароль должен содержать минимум 8 символов')
      .max(40, 'Слишком много символов')
})