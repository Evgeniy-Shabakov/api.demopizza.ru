import { z } from 'zod'

export const orderClientReply = z.object({
   id: z.number().int(),

   number: z.string(),

   phone: z.string().nullable().optional(),
   addressJson: z.any().nullable().optional(),
   userId: z.number().int().nullable().optional(),
   cityId: z.number().int(),
   deliveryZoneId: z.number().int().nullable().optional(),
   restaurantId: z.number().int(),
   responsibleEmployeeId: z.number().int().nullable().optional(),
   courierId: z.number().int().nullable().optional(),
   addressId: z.number().int().nullable().optional(),

   orderTypeId: z.number().int(),
   tableNumber: z.string().nullable().optional(),
   carNumber: z.string().nullable().optional(),
   packTakeaway: z.boolean().nullable().optional(),
   leaveAtTheDoor: z.boolean().nullable().optional(),
   dontRingDoorbell: z.boolean().nullable().optional(),

   orderStatusId: z.number().int(),

   totalProductsPrice: z.coerce.number(),
   deliveryPrice: z.coerce.number(),
   bonusCoinsPaid: z.coerce.number(),
   totalPrice: z.coerce.number(),

   bonusCoinsEarned: z.number(),

   paymentTypeId: z.number().int(),
   banknoteForChange: z.number().nullable().optional(),
   paymentStatusId: z.number().int(),

   userComment: z.string().nullable().optional(),
   responsibleEmployeeComment: z.string().nullable().optional(),

   options: z.any().nullable().optional(),
   snapshot: z.any().nullable().optional(),

   city: z.object({ name: z.string() }).optional(),
   deliveryZone: z.object({ name: z.string() }).nullable().optional(),
    restaurant: z.object({
       name: z.string(),
       address: z.any().nullable(),
    }).optional(),
   user: z.object({ phone: z.string() }).nullable().optional(),

   orderProducts: z.array(z.object({
      id: z.number().int(),
      orderId: z.number().int(),
      productId: z.number().int().nullable().optional(),
      quantity: z.number().int(),
      price: z.coerce.number(),
       product: z.object({
          id: z.number().int(),
          name: z.string(),
          imagePath: z.string().nullable(),
          priceDefault: z.coerce.number()
       }).nullable().optional()
    })).optional(),

    address: z.object({
       street: z.string(),
       house: z.string(),
       corps: z.string().nullable(),
       flat: z.string().nullable(),
       entrance: z.number().int().nullable(),
       floor: z.number().int().nullable(),
       entranceCode: z.string().nullable(),
       comment: z.string().nullable(),
       addressAsString: z.string().nullable()
    }).nullable().optional(),

    payment: z.object({
       paymentUrl: z.string().nullable()
    }).nullable().optional(),

   createdAt: z.date(),
   updatedAt: z.date()
})
