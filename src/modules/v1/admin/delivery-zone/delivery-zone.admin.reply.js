import { z } from 'zod'

export const deliveryZoneAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),

   cityId: z.number().int(),
   restaurantId: z.number().int(),

   minOrderValueForDelivery: z.coerce.number(),
   deliveryPrice: z.coerce.number(),
   orderValueForFreeDelivery: z.coerce.number().nullable(),

   geojsonFeature: z.any(),
   isActive: z.boolean(),

   createdAt: z.date(),
   updatedAt: z.date()
})
