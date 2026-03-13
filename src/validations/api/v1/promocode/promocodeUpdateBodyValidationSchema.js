import { z } from 'zod'

export const promocodeUpdateBodyValidationSchema = z.object({
   isActive: z
      .boolean('Статус активности должен быть булевым значением')
}).strict()