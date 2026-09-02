import { z } from 'zod'

export const productRestaurantAdminReply = z.object({
   id: z.number().int(),
   
   productId: z.number().int(),
   restaurantId: z.number().int(),

   isInStopList: z.boolean(),

   product: z.object({
      name: z.string(),
      imagePath: z.string().nullable()
   }).optional(),

   restaurant: z.object({
      name: z.string()
   }).optional(),

   createdAt: z.date(),
   updatedAt: z.date()
})
