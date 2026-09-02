import { z } from 'zod'

export const orderAdminBodyUpdate = z.strictObject({
   cityId: z.number().int().min(1).optional(),
   restaurantId: z.number().int().min(1).optional(),
   orderStatusId: z.number().int().min(1).max(9).optional(),
   paymentStatusId: z.number().int().min(1).max(5).optional(),
   responsibleEmployeeComment: z.string().trim().min(1).max(500).nullish(),
})
