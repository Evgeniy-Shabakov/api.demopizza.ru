import { restaurantClientSchema } from "./restaurant.client.schema.js"
import { restaurantClientController } from "./restaurant.client.controller.js"

export async function restaurantClientRoutes(app) {
   app.get('/', { schema: restaurantClientSchema.list }, restaurantClientController.list)
}
