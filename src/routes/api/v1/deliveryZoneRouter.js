import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { deliveryZoneBodyValidationSchema } from '#validations/api/v1/deliveryZone/deliveryZoneBodyValidationSchema.js'
import { deliveryZoneQueryValidationData } from '#validations/api/v1/deliveryZone/deliveryZoneQueryValidationData.js'
import { deliveryZoneIndexController } from '#controllers/api/v1/deliveryZone/deliveryZoneIndexController.js'
import { deliveryZoneShowController } from '#controllers/api/v1/deliveryZone/deliveryZoneShowController.js'
import { deliveryZoneStoreController } from '#controllers/api/v1/deliveryZone/deliveryZoneStoreController.js'
import { deliveryZoneUpdateController } from '#controllers/api/v1/deliveryZone/deliveryZoneUpdateController.js'
import { deliveryZoneDeleteController } from '#controllers/api/v1/deliveryZone/deliveryZoneDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { DELIVERY_ZONES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   validateQuery(deliveryZoneQueryValidationData),
   deliveryZoneIndexController)

router.get('/:id',
   validateId,
   validateQuery(deliveryZoneQueryValidationData),
   deliveryZoneShowController)

router.post('/', 
   authentication, routeAuthorization(DELIVERY_ZONES_ROUTE_PERMISSIONS.CREATE),
   validateBody(deliveryZoneBodyValidationSchema),
   deliveryZoneStoreController)

router.put('/:id',
   authentication, routeAuthorization(DELIVERY_ZONES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(deliveryZoneBodyValidationSchema),
   deliveryZoneUpdateController
)
router.delete('/:id',
   authentication, routeAuthorization(DELIVERY_ZONES_ROUTE_PERMISSIONS.DELETE),
   validateId,
   deliveryZoneDeleteController)

export default router