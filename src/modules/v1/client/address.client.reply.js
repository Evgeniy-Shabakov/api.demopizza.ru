import { z } from 'zod'

export const addressClientReply = z.object({
   id: z.number().int().optional(),
   name: z.string().nullable().optional(),

   userId: z.number().int().optional(),
   cityId: z.number().int().optional(),

   city: z.object({
      id: z.number().int(),
      name: z.string()
   }).optional(),

   street: z.string().optional(),
   house: z.string().optional(),
   corps: z.string().nullable().optional(),
   flat: z.string().nullable().optional(),
   entrance: z.number().int().nullable().optional(),
   floor: z.number().int().nullable().optional(),
   entranceCode: z.string().nullable().optional(),
   comment: z.string().nullable().optional(),

   latitude: z.number().nullable().optional(),
   longitude: z.number().nullable().optional(),
   addressAsString: z.string().nullable().optional(),
   externalApiData: z.any().nullable().optional()
})
