import { z } from 'zod'
import { authAdminLoginBody } from './auth.admin.login.body.js'
import { employeeAdminReply } from '../../employee/employee.admin.reply.js'

export const authAdminLoginSchema = {

   body: authAdminLoginBody,

   response: {
      200: z.object({
         data: employeeAdminReply
      })
   }

}
