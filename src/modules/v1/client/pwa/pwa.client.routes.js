import { pwaClientSchema } from "./pwa.client.schema.js"
import { pwaClientController } from "./pwa.client.controller.js"

export async function pwaClientRoutes(app) {
   app.get('/manifest.json', { schema: pwaClientSchema.get }, pwaClientController.get)
}