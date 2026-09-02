import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { employeeAdminReply } from '../employee.admin.reply.js'

export const employeeAdminSchemaGetOne = {
   params: idRequestSchema,

   response: {
      200: z.object({
         data: employeeAdminReply
      })
   }
}
