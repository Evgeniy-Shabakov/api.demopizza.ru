import { z } from 'zod'

export const promocodeAdminUpdateBody = z.strictObject({

   isActive: z.boolean()

})