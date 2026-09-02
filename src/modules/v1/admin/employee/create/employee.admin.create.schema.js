import { z } from 'zod'
import { employeeAdminReply } from '../employee.admin.reply.js'
import { employeeAdminBody } from '../employee.admin.body.js'

export const employeeAdminSchemaCreate = {
   body: employeeAdminBody,

   response: {
      201: z.object({
         data: employeeAdminReply
      })
   }
}
