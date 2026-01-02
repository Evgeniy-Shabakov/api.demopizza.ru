import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
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

const router = express.Router()

router.get('/',
   validateQuery(cityQueryValidationData),
   cityIndexController)

router.get('/:id',
   validateId,
   validateQuery(cityQueryValidationData),
   cityShowController)

router.post('/',
   verifyJWTAccessToken,
   validateBody(cityBodyValidationSchema),
   cityStoreController)

router.put('/:id',
   verifyJWTAccessToken,
   validateId,
   validateBody(cityBodyValidationSchema),
   cityUpdateController)

router.delete('/:id',
   verifyJWTAccessToken,
   validateId,
   cityDeleteController)

export default router