import { z } from 'zod'
import { promocodeAdminReply } from '../promocode.admin.reply.js'
import { paginationReplySchema } from '#modules/v1/shared/schemas/pagination.reply.schema.js'

export const promocodeAdminListSchema = {
   query: z.object({
      page: z.coerce.number().int().positive().optional(),
      perPage: z.coerce.number().int().positive().optional(),
      isActive: z.enum(['true', 'false']).optional(),
      usedAt: z.enum(['true', 'false']).optional()
   }),

   response: {
      200: z.object({
         data: z.array(promocodeAdminReply),

         meta: z.object({
            pagination: paginationReplySchema,
            filter: z.record(z.unknown())
         })
      })
   }
}
