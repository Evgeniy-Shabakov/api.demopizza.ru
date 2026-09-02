import { z } from 'zod'

export const deliveryZoneAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(100),

   cityId: z.int().min(1),
   restaurantId: z.int().min(1),

   minOrderValueForDelivery: z.coerce.number().nonnegative().nullish(),
   deliveryPrice: z.coerce.number().nonnegative().nullish(),
   orderValueForFreeDelivery: z.coerce.number().nonnegative().nullish(),

   geojsonFeature: z.json(),
   
   isActive: z.boolean()
})
