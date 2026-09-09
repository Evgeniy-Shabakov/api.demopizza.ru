import { orderClientCreateSchema } from "./create/order.client.create.schema.js"
import { orderClientCreateController } from "./create/order.client.create.controller.js"

export async function orderClientRoutes(app) {
   app.post('/', { schema: orderClientCreateSchema }, orderClientCreateController)
}
