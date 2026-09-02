import { deliveryZoneAdminSchema } from "./delivery-zone.admin.schema.js"
import { deliveryZoneAdminController } from "./delivery-zone.admin.controller.js"

export async function deliveryZoneAdminRoutes(app) {
   app.get('/', { schema: deliveryZoneAdminSchema.list }, deliveryZoneAdminController.list)
   app.get('/:id', { schema: deliveryZoneAdminSchema.getOne }, deliveryZoneAdminController.getOne)
   app.post('/', { schema: deliveryZoneAdminSchema.create }, deliveryZoneAdminController.create)
   app.put('/:id', { schema: deliveryZoneAdminSchema.update }, deliveryZoneAdminController.update)
   app.delete('/:id', { schema: deliveryZoneAdminSchema.delete }, deliveryZoneAdminController.delete)
}
