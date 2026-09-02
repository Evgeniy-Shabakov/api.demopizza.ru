import { cityClientSchema } from "./city.client.schema.js"
import { cityClientController } from "./city.client.controller.js"

export async function cityClientRoutes(app) {
   app.get('/', { schema: cityClientSchema.list }, cityClientController.list)
}
