import { z } from 'zod'
import { idRequestSchema } from '#modules/v1/shared/schemas/id.request.schema.js'

export const employeeAdminSchemaDelete = {
   params: idRequestSchema,

   response: {
      204: z.null()
   }
}
