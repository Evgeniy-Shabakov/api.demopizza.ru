import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'
import { employeeAdminChangePasswordBody } from './employee.admin.change-password.body.js'

export const employeeAdminSchemaChangePassword = {
   params: idRequestSchema,

   body: employeeAdminChangePasswordBody,

   response: {
      204: z.null()
   }
}
