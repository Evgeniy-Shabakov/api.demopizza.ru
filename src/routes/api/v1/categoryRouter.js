import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { categoryBodyValidationSchema } from '#validations/api/v1/category/categoryBodyValidationSchema.js'
import { categoryQueryValidationData } from '#validations/api/v1/category/categoryQueryValidationData.js'
import { categoryIndexController } from '#controllers/api/v1/category/categoryIndexController.js'
import { categoryShowController } from '#controllers/api/v1/category/categoryShowController.js'
import { categoryStoreController } from '#controllers/api/v1/category/categoryStoreController.js'
import { categoryUpdateController } from '#controllers/api/v1/category/categoryUpdateController.js'
import { categoryDeleteController } from '#controllers/api/v1/category/categoryDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { CATEGORIES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   validateQuery(categoryQueryValidationData),
   categoryIndexController)

router.get('/:id',
   validateId,
   validateQuery(categoryQueryValidationData),
   categoryShowController)

router.post('/',
   authentication, routeAuthorization(CATEGORIES_ROUTE_PERMISSIONS.CREATE),
   validateBody(categoryBodyValidationSchema),
   categoryStoreController)

router.put('/:id',
   authentication, routeAuthorization(CATEGORIES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(categoryBodyValidationSchema), 
   categoryUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(CATEGORIES_ROUTE_PERMISSIONS.DELETE),
   validateId, 
   categoryDeleteController)

export default router