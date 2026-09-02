import { z } from 'zod'

export const paginationReplySchema = z.object({
   page: z.number(),
   perPage: z.number(),
   total: z.number(),
   totalPages: z.number(),
   hasNextPage: z.boolean(),
   hasPrevPage: z.boolean()
})