import { z } from 'zod'

export const productRestaurantAdminStopListCountSchema = {
   querystring: z.strictObject({
      restaurantId: z.coerce.number().int().positive().optional()
   }),
   response: {
      200: z.object({
         data: z.number(),
         meta: z.object({
            filter: z.object({
               restaurantId: z.number().int().positive().optional()
            })
         })
      })
   }
}
