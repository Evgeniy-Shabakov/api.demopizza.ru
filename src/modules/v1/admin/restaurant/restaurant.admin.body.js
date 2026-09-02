import { z } from 'zod'

export const restaurantAdminBody = z.strictObject({
   name: z.string().trim().min(2).max(100),

   cityId: z.int().min(1),
   restaurantScheduleId: z.int().min(1),

   deliveryToAddressAvailable: z.boolean(),
   pickUpAtCounterAvailable: z.boolean(),
   pickUpAtCarWindowAvailable: z.boolean(),
   atRestaurantToTableAvailable: z.boolean(),
   atRestaurantAtCounterAvailable: z.boolean(),
   deliveryToRestaurantParkingAvailable: z.boolean(),
   isActive: z.boolean(),

   address: z.strictObject({
      addressAsString: z.string().trim().max(500)
   })
})
