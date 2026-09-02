import { legalDocumentAdminSchema } from "./legal-document.admin.schema.js"
import { legalDocumentAdminController } from "./legal-document.admin.controller.js"

export async function legalDocumentAdminRoutes(app) {
   app.get('/', { schema: legalDocumentAdminSchema.list }, legalDocumentAdminController.list)
   app.get('/:id', { schema: legalDocumentAdminSchema.getOne }, legalDocumentAdminController.getOne)
   app.post('/', { schema: legalDocumentAdminSchema.create }, legalDocumentAdminController.create)
   app.put('/:id', { schema: legalDocumentAdminSchema.update }, legalDocumentAdminController.update)
   app.delete('/:id', { schema: legalDocumentAdminSchema.delete }, legalDocumentAdminController.delete)
}
