import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { employeeAdminReply } from '../employee.admin.reply.js'
import { employeeAdminBody } from '../employee.admin.body.js'

export const employeeAdminSchemaUpdate = {
   params: idRequestSchema,

   body: employeeAdminBody,

   response: {
      200: z.object({
         data: employeeAdminReply
      })
   }
}
