import { z } from 'zod'
import { promocodeClientActivateBody } from './promocode.client.activate.body.js'

export const promocodeClientActivateSchema = {
   body: promocodeClientActivateBody,

   response: {
      200: z.object({
         data: z.object({
            success: z.boolean(),
            message: z.string(),
            bonusCoins: z.coerce.number()
         })
      })
   }
}
