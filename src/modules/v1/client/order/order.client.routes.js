import { orderClientCreateSchema } from "./order.client.create.schema.js"
import { orderClientCreateController } from "./order.client.create.controller.js"

export async function orderClientRoutes(app) {
   app.post('/', { schema: orderClientCreateSchema }, orderClientCreateController)
}
