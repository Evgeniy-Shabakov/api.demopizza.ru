import { promocodeAdminListSchema } from './list/promocode.admin.list.schema.js'
import { promocodeAdminListController } from './list/promocode.admin.list.controller.js'
import { promocodeAdminGetOneSchema } from './get-one/promocode.admin.get-one.schema.js'
import { promocodeAdminGetOneController } from './get-one/promocode.admin.get-one.controller.js'
import { promocodeAdminCreateSchema } from './create/promocode.admin.create.schema.js'
import { promocodeAdminCreateController } from './create/promocode.admin.create.controller.js'
import { promocodeAdminUpdateSchema } from './update/promocode.admin.update.schema.js'
import { promocodeAdminUpdateController } from './update/promocode.admin.update.controller.js'

export async function promocodeAdminRoutes(app) {
   app.get('/', { schema: promocodeAdminListSchema }, promocodeAdminListController)
   app.get('/:id', { schema: promocodeAdminGetOneSchema }, promocodeAdminGetOneController)
   app.post('/', { schema: promocodeAdminCreateSchema }, promocodeAdminCreateController)
   app.patch('/:id', { schema: promocodeAdminUpdateSchema }, promocodeAdminUpdateController)
}
