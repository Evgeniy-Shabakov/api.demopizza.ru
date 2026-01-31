import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { addressBodyValidationSchema } from '#validations/api/v1/address/addressBodyValidationSchema.js'
import { addressQueryValidationData } from '#validations/api/v1/address/addressQueryValidationData.js'
import { addressIndexController } from '#controllers/api/v1/address/addressIndexController.js'
import { addressShowController } from '#controllers/api/v1/address/addressShowController.js'
import { addressStoreController } from '#controllers/api/v1/address/addressStoreController.js'
import { addressUpdateController } from '#controllers/api/v1/address/addressUpdateController.js'
import { addressDeleteController } from '#controllers/api/v1/address/addressDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { ADDRESSES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   authentication, routeAuthorization(ADDRESSES_ROUTE_PERMISSIONS.GET_ALL),
   validateQuery(addressQueryValidationData),
   addressIndexController)

router.get('/:id',
   authentication, routeAuthorization(ADDRESSES_ROUTE_PERMISSIONS.GET_ONE),
   validateId,
   validateQuery(addressQueryValidationData),
   addressShowController)

router.post('/',
   authentication, routeAuthorization(ADDRESSES_ROUTE_PERMISSIONS.CREATE),
   validateBody(addressBodyValidationSchema),
   addressStoreController)

router.put('/:id',
   authentication, routeAuthorization(ADDRESSES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(addressBodyValidationSchema),
   addressUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(ADDRESSES_ROUTE_PERMISSIONS.DELETE),
   validateId,
   addressDeleteController)

export default router