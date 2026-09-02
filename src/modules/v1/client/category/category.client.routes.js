import { categoryClientSchema } from "./category.client.schema.js"
import { categoryClientController } from "./category.client.controller.js"

export async function categoryClientRoutes(app) {
   app.get('/', { schema: categoryClientSchema.list }, categoryClientController.list)
}
