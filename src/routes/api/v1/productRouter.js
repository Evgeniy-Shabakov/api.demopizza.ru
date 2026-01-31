import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { productBodyValidationSchema } from '#validations/api/v1/product/productBodyValidationSchema.js'
import { productQueryValidationData } from '#validations/api/v1/product/productQueryValidationData.js'
import { productFileLoading } from '#middlewares/api/v1/productFileLoading.js'
import { productIndexController } from '#controllers/api/v1/product/productIndexController.js'
import { productShowController } from '#controllers/api/v1/product/productShowController.js'
import { productStoreController } from '#controllers/api/v1/product/productStoreController.js'
import { productUpdateController } from '#controllers/api/v1/product/productUpdateController.js'
import { productDeleteController } from '#controllers/api/v1/product/productDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { PRODUCTS_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/', validateQuery(productQueryValidationData), productIndexController)

router.get('/:id',
   validateId,
   validateQuery(productQueryValidationData),
   productShowController)
   
router.post('/',
   authentication, routeAuthorization(PRODUCTS_ROUTE_PERMISSIONS.CREATE),
   productFileLoading,
   validateBody(productBodyValidationSchema),
   productStoreController)

router.put('/:id',
   authentication, routeAuthorization(PRODUCTS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   productFileLoading,
   validateBody(productBodyValidationSchema),
   productUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(PRODUCTS_ROUTE_PERMISSIONS.DELETE),
   validateId,
   productDeleteController)

export default router