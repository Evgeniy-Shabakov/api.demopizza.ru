import { z } from 'zod'

export const orderAdminSchemaCount = {

   response: {
      200: z.object({
         data: z.number()
      })
   }

}
