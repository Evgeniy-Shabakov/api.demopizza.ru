import { legalDocumentClientSchema } from "./legal-document.client.schema.js"
import { legalDocumentClientController } from "./legal-document.client.controller.js"

export async function legalDocumentClientRoutes(app) {
   app.get('/', { schema: legalDocumentClientSchema.list }, legalDocumentClientController.list)
   app.get('/:id', { schema: legalDocumentClientSchema.getOne }, legalDocumentClientController.getOne)
}
