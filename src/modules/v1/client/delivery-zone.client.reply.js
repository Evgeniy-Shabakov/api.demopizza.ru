import { z } from 'zod'

export const deliveryZoneClientReply = z.object({
   id: z.number().int(),
   name: z.string(),

   minOrderValueForDelivery: z.coerce.number(),
   deliveryPrice: z.coerce.number(),
   orderValueForFreeDelivery: z.coerce.number().nullable(),

   geojsonFeature: z.any(),
   isActive: z.boolean()
})
