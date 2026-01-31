import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { countryBodyValidationSchema } from '#validations/api/v1/country/countryBodyValidationSchema.js'
import { countryQueryValidationData } from '#validations/api/v1/country/countryQueryValidationData.js'
import { countryIndexController } from '#controllers/api/v1/country/countryIndexController.js'
import { countryShowController } from '#controllers/api/v1/country/countryShowController.js'
import { countryStoreController } from '#controllers/api/v1/country/countryStoreController.js'
import { countryUpdateController } from '#controllers/api/v1/country/countryUpdateController.js'
import { countryDeleteController } from '#controllers/api/v1/country/countryDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { COUNTRIES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/', validateQuery(countryQueryValidationData), countryIndexController)

router.get('/:id',
   validateId,
   validateQuery(countryQueryValidationData),
   countryShowController)

router.post('/',
   authentication, routeAuthorization(COUNTRIES_ROUTE_PERMISSIONS.CREATE),
   validateBody(countryBodyValidationSchema),
   countryStoreController)

router.put('/:id',
   authentication, routeAuthorization(COUNTRIES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(countryBodyValidationSchema),
   countryUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(COUNTRIES_ROUTE_PERMISSIONS.DELETE),
   validateId,
   countryDeleteController)

export default router