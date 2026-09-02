import { z } from 'zod'

export const productAdminReply = z.object({
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

    category: z.object({
       id: z.number().int(),
       name: z.string()
    })
       .nullish(),

   createdAt: z.date(),
   updatedAt: z.date()
})
