import { dadataClientSchema } from "./dadata.client.schema.js"
import { dadataClientController } from "./dadata.client.controller.js"

export async function dadataClientRoutes(app) {
   app.post('/suggestions', { schema: dadataClientSchema.suggestions },
      dadataClientController.suggestions)
}
