import { promocodeClientActivateSchema } from "./promocode.client.activate.schema.js"
import { promocodeClientActivateController } from "./promocode.client.activate.controller.js"

export async function promocodeClientRoutes(app) {
   app.post('/activate', { schema: promocodeClientActivateSchema }, promocodeClientActivateController)
}
