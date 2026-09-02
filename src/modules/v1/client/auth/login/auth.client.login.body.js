import { z } from 'zod'

export const authClientLoginBody = z.strictObject({

   vkidAccessToken: z.string().trim().min(1)

})