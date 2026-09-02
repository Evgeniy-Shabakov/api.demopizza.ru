import { z } from 'zod'

export const cityAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(100),

   countryId: z.number().int().min(1),

   minOrderValueForDeliveryByDefault: z
      .number()
      .nonnegative()
      .nullish(),

   deliveryPriceByDefault: z
      .number()
      .nonnegative()
      .nullish(),

   orderValueForFreeDeliveryByDefault: z
      .number()
      .nonnegative()
      .nullish(),

   mapIframe: z
      .string()
      .trim()
      .max(1000)
      .nullish(),

   geojson: z
      .any()
      .nullish(),
})
