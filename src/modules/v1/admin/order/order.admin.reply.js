import { z } from 'zod'

export const orderAdminReply = z.object({
   id: z.number().int(),

   number: z.string(),

   phone: z.string().nullable(),
   addressJson: z.any().nullable(),
   userId: z.number().int().nullable(),
   cityId: z.number().int(),
   deliveryZoneId: z.number().int().nullable(),
   restaurantId: z.number().int(),
   responsibleEmployeeId: z.number().int().nullable(),
   courierId: z.number().int().nullable(),
   addressId: z.number().int().nullable(),

   orderTypeId: z.number().int(),
   tableNumber: z.string().nullable(),
   carNumber: z.string().nullable(),
   packTakeaway: z.boolean().nullable(),
   leaveAtTheDoor: z.boolean().nullable(),
   dontRingDoorbell: z.boolean().nullable(),

   orderStatusId: z.number().int(),

   totalProductsPrice: z.coerce.number(),
   deliveryPrice: z.coerce.number(),
   bonusCoinsPaid: z.coerce.number(),
   totalPrice: z.coerce.number(),

   bonusCoinsEarned: z.number(),

   paymentTypeId: z.number().int(),
   banknoteForChange: z.number().nullable(),
   paymentStatusId: z.number().int(),

   userComment: z.string().nullable(),
   responsibleEmployeeComment: z.string().nullable(),

   options: z.any().nullable(),
   snapshot: z.any().nullable(),

    city: z.object({ name: z.string() }).nullish(),
    deliveryZone: z.object({ name: z.string() }).nullish(),
    restaurant: z.object({ name: z.string() }).nullish(),
    user: z.object({ phone: z.string() }).nullish(),

   orderProducts: z.array(z.object({
      id: z.number().int(),
      orderId: z.number().int(),
      productId: z.number().int().nullable(),
      quantity: z.number().int(),
      price: z.coerce.number(),
      product: z.object({
         id: z.number().int(),
         name: z.string(),
         imagePath: z.string().nullable(),
         priceDefault: z.coerce.number()
      }).nullable()
   })).nullish(),

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
   }).nullish(),

   createdAt: z.date(),
   updatedAt: z.date()
})
