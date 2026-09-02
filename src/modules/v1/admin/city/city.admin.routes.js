import { cityAdminSchema } from "./city.admin.schema.js"
import { cityAdminController } from "./city.admin.controller.js"

export async function cityAdminRoutes(app) {
   app.get('/', { schema: cityAdminSchema.list }, cityAdminController.list)
   app.get('/:id', { schema: cityAdminSchema.getOne }, cityAdminController.getOne)
   app.post('/', { schema: cityAdminSchema.create }, cityAdminController.create)
   app.put('/:id', { schema: cityAdminSchema.update }, cityAdminController.update)
   app.delete('/:id', { schema: cityAdminSchema.delete }, cityAdminController.delete)
}
