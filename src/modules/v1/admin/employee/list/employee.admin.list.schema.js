import { z } from 'zod'
import { employeeAdminReply } from '../employee.admin.reply.js'

export const employeeAdminSchemaList = {
   response: {
      200: z.object({
         data: z.array(employeeAdminReply)
      })
   }
}
