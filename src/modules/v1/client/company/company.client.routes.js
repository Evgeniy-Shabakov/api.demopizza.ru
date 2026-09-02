import { companyClientSchema } from "./company.client.schema.js"
import { companyClientController } from "./company.client.controller.js"

export async function companyClientRoutes(app) {
   app.get('/', { schema: companyClientSchema.get }, companyClientController.get)
}
