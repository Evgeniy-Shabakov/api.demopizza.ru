import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { deliveryZoneAdminReply } from './delivery-zone.admin.reply.js'
import { deliveryZoneAdminBody } from './delivery-zone.admin.body.js'

export const deliveryZoneAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(deliveryZoneAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: deliveryZoneAdminReply
         })
      }
   },
   create: {
      body: deliveryZoneAdminBody,
      response: {
         201: z.object({
            data: deliveryZoneAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: deliveryZoneAdminBody,
      response: {
         200: z.object({
            data: deliveryZoneAdminReply
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
