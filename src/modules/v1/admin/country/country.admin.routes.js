import { countryAdminSchema } from "./country.admin.schema.js"
import { countryAdminController } from "./country.admin.controller.js"

export async function countryAdminRoutes(app) {
   app.get('/', { schema: countryAdminSchema.list }, countryAdminController.list)
   app.get('/:id', { schema: countryAdminSchema.getOne }, countryAdminController.getOne)
   app.post('/', { schema: countryAdminSchema.create }, countryAdminController.create)
   app.put('/:id', { schema: countryAdminSchema.update }, countryAdminController.update)
   app.delete('/:id', { schema: countryAdminSchema.delete }, countryAdminController.delete)
}
