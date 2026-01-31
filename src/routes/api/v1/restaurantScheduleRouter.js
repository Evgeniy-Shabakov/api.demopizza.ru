import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { restaurantScheduleBodyValidationSchema } from '#validations/api/v1/restaurantSchedule/restaurantScheduleBodyValidationSchema.js'
import { restaurantScheduleQueryValidationData } from '#validations/api/v1/restaurantSchedule/restaurantScheduleQueryValidationData.js'
import { restaurantScheduleIndexController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleIndexController.js'
import { restaurantScheduleShowController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleShowController.js'
import { restaurantScheduleStoreController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleStoreController.js'
import { restaurantScheduleUpdateController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleUpdateController.js'
import { restaurantScheduleDeleteController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   validateQuery(restaurantScheduleQueryValidationData),
   restaurantScheduleIndexController)

router.get('/:id',
   validateId,
   validateQuery(restaurantScheduleQueryValidationData),
   restaurantScheduleShowController
)
router.post('/', 
   authentication, routeAuthorization(RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.CREATE),
   validateBody(restaurantScheduleBodyValidationSchema),
   restaurantScheduleStoreController)

router.put('/:id',
   authentication, routeAuthorization(RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(restaurantScheduleBodyValidationSchema),
   restaurantScheduleUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.DELETE),
   validateId,
   restaurantScheduleDeleteController)

export default router