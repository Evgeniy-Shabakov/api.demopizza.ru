import { productAdminSchema } from "./product.admin.schema.js"
import { productAdminController } from "./product.admin.controller.js"

export async function productAdminRoutes(app) {
   app.get('/', { schema: productAdminSchema.list }, productAdminController.list)
   app.get('/:id', { schema: productAdminSchema.getOne }, productAdminController.getOne)
   app.post('/', { schema: productAdminSchema.create }, productAdminController.create)
   app.put('/:id', { schema: productAdminSchema.update }, productAdminController.update)
   app.delete('/:id', { schema: productAdminSchema.delete }, productAdminController.delete)
}
