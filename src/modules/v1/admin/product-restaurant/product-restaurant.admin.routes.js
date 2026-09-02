import { productRestaurantAdminSchema } from "./product-restaurant.admin.schema.js"
import { productRestaurantAdminController } from "./product-restaurant.admin.controller.js"
import { productRestaurantAdminStopListCountSchema } from "./stop-list-count/product-restaurant.admin.stop-list-count.schema.js"
import { productRestaurantStopListCountController } from "./stop-list-count/product-restaurant.admin.stop-list-count.controller.js"

export async function productRestaurantAdminRoutes(app) {
   app.get('/', { schema: productRestaurantAdminSchema.list }, productRestaurantAdminController.list)
   app.get('/stop-list-count', { schema: productRestaurantAdminStopListCountSchema }, productRestaurantStopListCountController)
   app.get('/:id', { schema: productRestaurantAdminSchema.getOne }, productRestaurantAdminController.getOne)
   app.post('/', { schema: productRestaurantAdminSchema.create }, productRestaurantAdminController.create)
   app.put('/:id', { schema: productRestaurantAdminSchema.update }, productRestaurantAdminController.update)
   app.delete('/:id', { schema: productRestaurantAdminSchema.delete }, productRestaurantAdminController.delete)
}
