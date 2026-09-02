import { z } from 'zod'
import { restaurantScheduleAdminReply } from '../restaurant-schedule/restaurant-schedule.admin.reply.js'

export const restaurantAdminReply = z.object({
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
       .nullish(),

    restaurantSchedule: restaurantScheduleAdminReply.nullish(),

   createdAt: z.date(),
   updatedAt: z.date(),
})
