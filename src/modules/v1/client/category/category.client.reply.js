import { z } from 'zod'
import { productClientReply } from '../product.client.reply.js'

export const categoryClientReply = z.object({
   id: z.number().int(),
   name: z.string(),

   position: z.number().int().nullable(),

   products: z.array(productClientReply).optional()
})
