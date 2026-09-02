import { orderAdminSchemaList } from "./list/order.admin.schema.list.js"
import { orderAdminSchemaActive } from "./active/order.admin.schema.active.js"
import { orderAdminControllerList } from "./list/order.admin.controller.list.js"
import { orderAdminControllerActive } from "./active/order.admin.controller.active.js"
import { orderAdminSchemaCount } from "./count/order.admin.schema.count.js"
import { orderAdminControllerCount } from "./count/order.admin.controller.count.js"
import { orderAdminSchemaGetOne } from "./get-one/order.admin.schema.get-one.js"
import { orderAdminControllerGetOne } from "./get-one/order.admin.controller.get-one.js"
import { orderAdminSchemaNextStatus } from "./next-status/order.admin.schema.next-status.js"
import { orderAdminControllerNextStatus } from "./next-status/order.admin.controller.next-status.js"
import { orderAdminSchemaPreviousStatus } from "./previous-status/order.admin.schema.previous-status.js"
import { orderAdminControllerPreviousStatus } from "./previous-status/order.admin.controller.previous-status.js"
import { orderAdminSchemaUpdate } from "./update/order.admin.schema.update.js"
import { orderAdminControllerUpdate } from "./update/order.admin.controller.update.js"

export async function orderAdminRoutes(app) {
   app.get('/', { schema: orderAdminSchemaList }, orderAdminControllerList)

   app.get('/active', { schema: orderAdminSchemaActive }, orderAdminControllerActive)
   app.get('/count', { schema: orderAdminSchemaCount }, orderAdminControllerCount)

   app.get('/:id', { schema: orderAdminSchemaGetOne }, orderAdminControllerGetOne)

   app.patch('/:id', { schema: orderAdminSchemaUpdate }, orderAdminControllerUpdate)
   
   app.patch('/:id/next-status', { schema: orderAdminSchemaNextStatus }, orderAdminControllerNextStatus)
   app.patch('/:id/previous-status', { schema: orderAdminSchemaPreviousStatus }, orderAdminControllerPreviousStatus)
}
