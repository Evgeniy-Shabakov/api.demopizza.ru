import { z } from 'zod'

export const employeeAdminBody = z.strictObject({

   phone: z.string().trim().min(10).max(20),
   email: z.email().nullish(),
   password: z.string().trim().min(8).nullish(),
   firstName: z.string().trim().min(1).max(50).nullish(),
   lastName: z.string().trim().min(1).max(50).nullish(),
   middleName: z.string().trim().min(1).max(50).nullish(),
   jobTitle: z.string().trim().min(1).max(100).nullish(),
   isActive: z.boolean(),

   employeeRoles: z
      .array(z.object({
         roleId: z.int().min(1),
         restaurantId: z.int().min(1).nullish()
      }))
      .nullish(),
})
