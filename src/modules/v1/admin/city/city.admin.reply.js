import { z } from 'zod'
import { countryAdminReply } from '../country/country.admin.reply.js'

export const cityAdminReply = z.object({
   id: z.number().int(),
   name: z.string(),
   mapIframe: z.string().nullable(),

   countryId: z.number().int(),
   minOrderValueForDeliveryByDefault: z.coerce.number().nullable(),
   deliveryPriceByDefault: z.coerce.number().nullable(),
   orderValueForFreeDeliveryByDefault: z.coerce.number().nullable(),
   geojson: z.any().nullable(),

    country: countryAdminReply.nullish(),

   createdAt: z.date(),
   updatedAt: z.date(),
})
