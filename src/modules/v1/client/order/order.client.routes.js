import { orderClientCreateSchema } from "./create/order.client.create.schema.js"
import { orderClientCreateController } from "./create/order.client.create.controller.js"
import { orderClientSchemaActive } from "./active/order.client.active.schema.js"
import { orderClientControllerActive } from "./active/order.client.active.controller.js"
import { orderClientSchemaLast } from "./last/order.client.last.schema.js"
import { orderClientControllerLast } from "./last/order.client.last.controller.js"

export async function orderClientRoutes(app) {
   app.post('/', { schema: orderClientCreateSchema }, orderClientCreateController)

   app.get('/active', {
      preHandler: app.authenticateUser,
      schema: orderClientSchemaActive
   }, orderClientControllerActive)

   app.get('/last', {
      preHandler: app.authenticateUser,
      schema: orderClientSchemaLast
   }, orderClientControllerLast)
}
