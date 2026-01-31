import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { restaurantBodyValidationSchema } from '#validations/api/v1/restaurant/restaurantBodyValidationSchema.js'
import { restaurantQueryValidationData } from '#validations/api/v1/restaurant/restaurantQueryValidationData.js'
import { restaurantIndexController } from '#controllers/api/v1/restaurant/restaurantIndexController.js'
import { restaurantShowController } from '#controllers/api/v1/restaurant/restaurantShowController.js'
import { restaurantStoreController } from '#controllers/api/v1/restaurant/restaurantStoreController.js'
import { restaurantUpdateController } from '#controllers/api/v1/restaurant/restaurantUpdateController.js'
import { restaurantDeleteController } from '#controllers/api/v1/restaurant/restaurantDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { RESTAURANTS_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/', validateQuery(restaurantQueryValidationData), restaurantIndexController)

router.get('/:id',
   validateId,
   validateQuery(restaurantQueryValidationData),
   restaurantShowController
)
router.post('/',
   authentication, routeAuthorization(RESTAURANTS_ROUTE_PERMISSIONS.CREATE),
   validateBody(restaurantBodyValidationSchema),
   restaurantStoreController)

router.put('/:id',
   authentication, routeAuthorization(RESTAURANTS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(restaurantBodyValidationSchema),
   restaurantUpdateController
)
router.delete('/:id',
   authentication, routeAuthorization(RESTAURANTS_ROUTE_PERMISSIONS.DELETE),
   validateId,
   restaurantDeleteController)

export default router