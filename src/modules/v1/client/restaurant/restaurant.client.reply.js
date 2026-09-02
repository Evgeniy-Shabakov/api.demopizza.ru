import { z } from 'zod'
import { restaurantScheduleClientReply } from '../restaurant-schedule.client.reply.js'

export const restaurantClientReply = z.object({
   id: z.number().int(),
   name: z.string(),

   cityId: z.number().int(),
   restaurantScheduleId: z.number().int(),

   address: z.any(),

   deliveryToAddressAvailable: z.boolean(),
   pickUpAtCounterAvailable: z.boolean(),
   pickUpAtCarWindowAvailable: z.boolean(),
   atRestaurantAtCounterAvailable: z.boolean(),
   atRestaurantToTableAvailable: z.boolean(),
   deliveryToRestaurantParkingAvailable: z.boolean(),
   isActive: z.boolean(),

   city: z.object({
      id: z.number().int(),
      name: z.string()
   })
      .optional(),

   restaurantSchedule: restaurantScheduleClientReply.optional()
})
