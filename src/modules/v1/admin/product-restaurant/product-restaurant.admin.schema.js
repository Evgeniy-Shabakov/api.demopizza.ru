import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { productRestaurantAdminReply } from './product-restaurant.admin.reply.js'
import { productRestaurantAdminBody } from './product-restaurant.admin.body.js'

export const productRestaurantAdminSchema = {
   list: {
      response: {
         200: z.object({
            data: z.array(productRestaurantAdminReply)
         })
      }
   },
   getOne: {
      params: idRequestSchema,
      response: {
         200: z.object({
            data: productRestaurantAdminReply
         })
      }
   },
   create: {
      body: productRestaurantAdminBody,
      response: {
         201: z.object({
            data: productRestaurantAdminReply
         })
      }
   },
   update: {
      params: idRequestSchema,
      body: productRestaurantAdminBody,
      response: {
         200: z.object({
            data: productRestaurantAdminReply
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
