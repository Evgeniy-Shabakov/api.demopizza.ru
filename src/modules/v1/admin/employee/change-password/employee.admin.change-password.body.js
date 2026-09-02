import { z } from 'zod'

export const employeeAdminChangePasswordBody = z.strictObject({

   password: z.string().trim().min(8),
   newPassword: z.string().trim().min(8),
   
})