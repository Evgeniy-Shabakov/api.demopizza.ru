import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { productRestaurantBodyValidationSchema } from '#validations/api/v1/productRestaurant/productRestaurantBodyValidationSchema.js'
import { productRestaurantQueryValidationData } from '#validations/api/v1/productRestaurant/productRestaurantQueryValidationData.js'
import { productRestaurantIndexController } from '#controllers/api/v1/productRestaurant/productRestaurantIndexController.js'
import { productRestaurantShowController } from '#controllers/api/v1/productRestaurant/productRestaurantShowController.js'
import { productRestaurantStoreController } from '#controllers/api/v1/productRestaurant/productRestaurantStoreController.js'
import { productRestaurantUpdateController } from '#controllers/api/v1/productRestaurant/productRestaurantUpdateController.js'
import { productRestaurantDeleteController } from '#controllers/api/v1/productRestaurant/productRestaurantDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'
import { productRestaurantAuthorization } from '#middlewares/api/v1/authorization/productRestaurantAuthorization.js'

const router = express.Router()

router.get('/',
   validateQuery(productRestaurantQueryValidationData),
   productRestaurantIndexController)

router.get('/:id',
   validateId,
   validateQuery(productRestaurantQueryValidationData),
   productRestaurantShowController)

router.post('/',
   authentication, routeAuthorization(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.CREATE),
   validateBody(productRestaurantBodyValidationSchema), 
   productRestaurantAuthorization(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.CREATE),
   productRestaurantStoreController)

router.put('/:id',
   authentication, routeAuthorization(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(productRestaurantBodyValidationSchema), 
   productRestaurantAuthorization(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.UPDATE),
   productRestaurantUpdateController
)
router.delete('/:id',
   authentication, routeAuthorization(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.DELETE),
   validateId, productRestaurantAuthorization(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.DELETE),
   productRestaurantDeleteController)

export default router