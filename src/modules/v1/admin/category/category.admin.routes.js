import { categoryAdminSchema } from "./category.admin.schema.js"
import { categoryAdminController } from "./category.admin.controller.js"

export async function categoryAdminRoutes(app) {
   app.get('/', { schema: categoryAdminSchema.list }, categoryAdminController.list)
   app.get('/:id', { schema: categoryAdminSchema.getOne }, categoryAdminController.getOne)
   app.post('/', { schema: categoryAdminSchema.create }, categoryAdminController.create)
   app.put('/:id', { schema: categoryAdminSchema.update }, categoryAdminController.update)
   app.delete('/:id', { schema: categoryAdminSchema.delete }, categoryAdminController.delete)
}
