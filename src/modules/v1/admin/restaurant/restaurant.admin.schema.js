import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { restaurantAdminReply } from './restaurant.admin.reply.js'
import { restaurantAdminBody } from './restaurant.admin.body.js'


export const restaurantAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(restaurantAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: restaurantAdminReply
         })
      }
   },
   create: {
      body: restaurantAdminBody,
      response: {
         201: z.object({
            data: restaurantAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: restaurantAdminBody,
      response: {
         200: z.object({
            data: restaurantAdminReply
         })
      }
   },
   delete: {
      params: idRequestSchema,
      response: {
         204: z.null()
      }
   }
}
