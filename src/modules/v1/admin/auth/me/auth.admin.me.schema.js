import { z } from 'zod'
import { employeeAdminReply } from '../../employee/employee.admin.reply.js'

export const authAdminMeSchema = {

   response: {
      200: z.object({
         data: employeeAdminReply
      })
   }

}