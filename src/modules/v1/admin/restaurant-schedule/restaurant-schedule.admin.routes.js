import { restaurantScheduleAdminSchema } from "./restaurant-schedule.admin.schema.js"
import { restaurantScheduleAdminController } from "./restaurant-schedule.admin.controller.js"

export async function restaurantScheduleAdminRoutes(app) {
   app.get('/', { schema: restaurantScheduleAdminSchema.list }, restaurantScheduleAdminController.list)
   app.get('/:id', { schema: restaurantScheduleAdminSchema.getOne }, restaurantScheduleAdminController.getOne)
   app.post('/', { schema: restaurantScheduleAdminSchema.create }, restaurantScheduleAdminController.create)
   app.put('/:id', { schema: restaurantScheduleAdminSchema.update }, restaurantScheduleAdminController.update)
   app.delete('/:id', { schema: restaurantScheduleAdminSchema.delete }, restaurantScheduleAdminController.delete)
}
