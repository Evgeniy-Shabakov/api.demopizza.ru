import express from 'express'
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

const router = express.Router()

router.get('/', validateQuery(addressQueryValidationData), addressIndexController)

router.get('/:id',
   validateId,
   validateQuery(addressQueryValidationData),
   addressShowController
)
router.post('/', validateBody(addressBodyValidationSchema), addressStoreController)

router.put('/:id',
   validateId,
   validateBody(addressBodyValidationSchema),
   addressUpdateController
)
router.delete('/:id', validateId, addressDeleteController)

export default router