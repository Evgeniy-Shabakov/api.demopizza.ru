import { z } from 'zod'

export const employeeAdminReply = z.object({
   id: z.number().int(),

   phone: z.string(),
   phoneVerifiedAt: z.date().nullable(),
   email: z.string().nullable(),
   emailVerifiedAt: z.date().nullable(),
   firstName: z.string().nullable(),
   lastName: z.string().nullable(),
   middleName: z.string().nullable(),
   jobTitle: z.string().nullable(),
   isActive: z.boolean(),

   employeeRoles: z.array(z.object({
      id: z.number().int(),
      employeeId: z.number().int(),
      roleId: z.number().int(),
      restaurantId: z.number().int().nullable(),

      role: z.object({
         id: z.number().int(),
         name: z.string(),
         description: z.string().nullable(),
         employeesControlLevel: z.number().int()
      }).nullish(),

      restaurant: z.object({
         id: z.number().int(),
         name: z.string()
      }).nullish()
   })).optional(),

   createdAt: z.date(),
   updatedAt: z.date()
})
