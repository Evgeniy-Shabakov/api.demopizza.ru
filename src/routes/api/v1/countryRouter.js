import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
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
import { generalAuthorization } from '#middlewares/api/v1/authorization/generalAuthorization.js'

const router = express.Router()

router.get('/', validateQuery(countryQueryValidationData), countryIndexController)

router.get('/:id',
   validateId,
   validateQuery(countryQueryValidationData),
   countryShowController)

router.post('/',
   verifyJWTAccessToken, generalAuthorization,
   validateBody(countryBodyValidationSchema),
   countryStoreController)

router.put('/:id',
   verifyJWTAccessToken, generalAuthorization,
   validateId,
   validateBody(countryBodyValidationSchema),
   countryUpdateController)

router.delete('/:id',
   verifyJWTAccessToken, generalAuthorization,
   validateId,
   countryDeleteController)

export default router