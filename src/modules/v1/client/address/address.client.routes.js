import { addressClientCreateSchema } from "./create/address.client.create.schema.js"
import { addressClientCreateController } from "./create/address.client.create.controller.js"
import { addressClientDeleteSchema } from "./delete/address.client.delete.schema.js"
import { addressClientDeleteController } from "./delete/address.client.delete.controller.js"

export async function addressClientRoutes(app) {
   app.post('/', { schema: addressClientCreateSchema }, addressClientCreateController)
   app.delete('/:id', { schema: addressClientDeleteSchema }, addressClientDeleteController)
}