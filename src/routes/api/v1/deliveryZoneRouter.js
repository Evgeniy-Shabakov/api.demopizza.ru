import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
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
import { generalAuthorization } from '#middlewares/api/v1/authorization/generalAuthorization.js'

const router = express.Router()

router.get('/',
   validateQuery(deliveryZoneQueryValidationData),
   deliveryZoneIndexController)

router.get('/:id',
   validateId,
   validateQuery(deliveryZoneQueryValidationData),
   deliveryZoneShowController)

router.post('/',
   verifyJWTAccessToken, generalAuthorization,
   validateBody(deliveryZoneBodyValidationSchema),
   deliveryZoneStoreController)

router.put('/:id',
   verifyJWTAccessToken, generalAuthorization,
   validateId,
   validateBody(deliveryZoneBodyValidationSchema),
   deliveryZoneUpdateController
)
router.delete('/:id',
   verifyJWTAccessToken, generalAuthorization,
   validateId,
   deliveryZoneDeleteController)

export default router