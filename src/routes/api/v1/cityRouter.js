import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { cityBodyValidationSchema } from '#validations/api/v1/city/cityBodyValidationSchema.js'
import { cityQueryValidationData } from '#validations/api/v1/city/cityQueryValidationData.js'
import { cityIndexController } from '#controllers/api/v1/city/cityIndexController.js'
import { cityShowController } from '#controllers/api/v1/city/cityShowController.js'
import { cityStoreController } from '#controllers/api/v1/city/cityStoreController.js'
import { cityUpdateController } from '#controllers/api/v1/city/cityUpdateController.js'
import { cityDeleteController } from '#controllers/api/v1/city/cityDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { CITIES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   validateQuery(cityQueryValidationData),
   cityIndexController)

router.get('/:id',
   validateId,
   validateQuery(cityQueryValidationData),
   cityShowController)

router.post('/', 
   authentication, routeAuthorization(CITIES_ROUTE_PERMISSIONS.CREATE),
   validateBody(cityBodyValidationSchema),
   cityStoreController)

router.put('/:id',
   authentication, routeAuthorization(CITIES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(cityBodyValidationSchema),
   cityUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(CITIES_ROUTE_PERMISSIONS.DELETE),
   validateId,
   cityDeleteController)

export default router