import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { restaurantScheduleAdminBody } from './restaurant-schedule.admin.body.js'
import { restaurantScheduleAdminReply } from './restaurant-schedule.admin.reply.js'

export const restaurantScheduleAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(restaurantScheduleAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: restaurantScheduleAdminReply
         })
      }
   },
   create: {
      body: restaurantScheduleAdminBody,
      response: {
         201: z.object({
            data: restaurantScheduleAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: restaurantScheduleAdminBody,
      response: {
         200: z.object({
            data: restaurantScheduleAdminReply
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
