import { z } from 'zod'

export const productRestaurantClientReply = z.object({
   id: z.number().int(),

   productId: z.number().int(),
   restaurantId: z.number().int(),

   isInStopList: z.boolean()
})
