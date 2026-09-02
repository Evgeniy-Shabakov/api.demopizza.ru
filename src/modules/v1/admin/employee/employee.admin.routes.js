import { employeeAdminSchemaList } from './list/employee.admin.list.schema.js'
import { employeeAdminListController } from './list/employee.admin.list.controller.js'
import { employeeAdminSchemaGetOne } from './get-one/employee.admin.get-one.schema.js'
import { employeeAdminGetOneController } from './get-one/employee.admin.get-one.controller.js'
import { employeeAdminSchemaCreate } from './create/employee.admin.create.schema.js'
import { employeeAdminCreateController } from './create/employee.admin.create.controller.js'
import { employeeAdminSchemaUpdate } from './update/employee.admin.update.schema.js'
import { employeeAdminUpdateController } from './update/employee.admin.update.controller.js'
import { employeeAdminSchemaChangePassword } from './change-password/employee.admin.change-password.schema.js'
import { employeeAdminChangePasswordController } from './change-password/employee.admin.change-password.controller.js'
import { employeeAdminSchemaDelete } from './delete/employee.admin.delete.schema.js'
import { employeeAdminDeleteController } from './delete/employee.admin.delete.controller.js'

export async function employeeAdminRoutes(app) {
   app.get('/', { schema: employeeAdminSchemaList }, employeeAdminListController)
   app.get('/:id', { schema: employeeAdminSchemaGetOne }, employeeAdminGetOneController)
   app.post('/', { schema: employeeAdminSchemaCreate }, employeeAdminCreateController)
   app.put('/:id', { schema: employeeAdminSchemaUpdate }, employeeAdminUpdateController)
   app.patch('/:id/change-password', { schema: employeeAdminSchemaChangePassword }, employeeAdminChangePasswordController)
   app.delete('/:id', { schema: employeeAdminSchemaDelete }, employeeAdminDeleteController)
}
