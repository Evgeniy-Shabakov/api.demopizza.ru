import { designAdminSchema } from "./design.admin.schema.js"
import { designAdminController } from "./design.admin.controller.js"

export async function designAdminRoutes(app) {
   app.get('/', { schema: designAdminSchema.list }, designAdminController.list)
   app.get('/:id', { schema: designAdminSchema.getOne }, designAdminController.getOne)
   app.post('/', { schema: designAdminSchema.create }, designAdminController.create)
   app.put('/:id', { schema: designAdminSchema.update }, designAdminController.update)
   app.delete('/:id', { schema: designAdminSchema.delete }, designAdminController.delete)
}
