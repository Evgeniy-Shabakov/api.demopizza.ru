import { z } from 'zod'

export const promocodeClientActivateBody = z.strictObject({

   code: z.string().trim().min(8).max(50)

})