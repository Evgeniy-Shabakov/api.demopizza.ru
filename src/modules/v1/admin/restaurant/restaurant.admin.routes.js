import { restaurantAdminSchema } from "./restaurant.admin.schema.js"
import { restaurantAdminController } from "./restaurant.admin.controller.js"

export async function restaurantAdminRoutes(app) {
   app.get('/', { schema: restaurantAdminSchema.list }, restaurantAdminController.list)
   app.get('/:id', { schema: restaurantAdminSchema.getOne }, restaurantAdminController.getOne)
   app.post('/', { schema: restaurantAdminSchema.create }, restaurantAdminController.create)
   app.put('/:id', { schema: restaurantAdminSchema.update }, restaurantAdminController.update)
   app.delete('/:id', { schema: restaurantAdminSchema.delete }, restaurantAdminController.delete)
}
