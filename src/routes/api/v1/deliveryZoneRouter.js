import express from 'express'
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

const router = express.Router()

router.get('/', validateQuery(deliveryZoneQueryValidationData), deliveryZoneIndexController)

router.get('/:id',
   validateId,
   validateQuery(deliveryZoneQueryValidationData),
   deliveryZoneShowController
)
router.post('/', validateBody(deliveryZoneBodyValidationSchema), deliveryZoneStoreController)

router.put('/:id',
   validateId,
   validateBody(deliveryZoneBodyValidationSchema),
   deliveryZoneUpdateController
)
router.delete('/:id', validateId, deliveryZoneDeleteController)

export default router