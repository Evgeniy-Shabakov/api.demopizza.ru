import { z } from 'zod'

export const productRestaurantAdminBody = z.strictObject({
   productId: z.int().min(1),
   restaurantId: z.int().min(1),

   isInStopList: z.boolean()
})
