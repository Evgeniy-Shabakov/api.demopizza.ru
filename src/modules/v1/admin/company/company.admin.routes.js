import { companyAdminSchema } from "./company.admin.schema.js"
import { companyAdminController } from "./company.admin.controller.js"

export async function companyAdminRoutes(app) {
   app.get('/', { schema: companyAdminSchema.get }, companyAdminController.get)
   app.put('/', { schema: companyAdminSchema.update }, companyAdminController.update)
}
