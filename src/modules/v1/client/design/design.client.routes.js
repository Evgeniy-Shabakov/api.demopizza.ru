import { designClientSchema } from "./design.client.schema.js"
import { designClientController } from "./design.client.controller.js"

export async function designClientRoutes(app) {
   app.get('/active', { schema: designClientSchema.getActive }, designClientController.getActive)
}
