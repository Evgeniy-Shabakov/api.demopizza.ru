import { z } from 'zod'
import { productRestaurantClientReply } from './product-restaurant.client.reply.js'

export const productClientReply = z.object({
   id: z.number().int(),
   name: z.string(),

   categoryId: z.number().int(),

   imagePath: z.string().nullable(),
   descriptionShort: z.string().nullable(),
   descriptionFull: z.string().nullable(),
   priceDefault: z.coerce.number(),
   bonusCoinsDefault: z.coerce.number().nullable(),
   positionInCategory: z.number().int().nullable(),
   isActive: z.boolean(),

   productRestaurants: z.array(productRestaurantClientReply).optional()
})
