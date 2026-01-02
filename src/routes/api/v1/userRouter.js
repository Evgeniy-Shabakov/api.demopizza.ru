import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { userBodyValidationSchema } from '#validations/api/v1/user/userBodyValidationSchema.js'
import { userQueryValidationData } from '#validations/api/v1/user/userQueryValidationData.js'
import { userIndexController } from '#controllers/api/v1/user/userIndexController.js'
import { userShowController } from '#controllers/api/v1/user/userShowController.js'
import { userStoreController } from '#controllers/api/v1/user/userStoreController.js'
import { userUpdateController } from '#controllers/api/v1/user/userUpdateController.js'
import { userDeleteController } from '#controllers/api/v1/user/userDeleteController.js'

const router = express.Router()

router.get('/',
   verifyJWTAccessToken,
   validateQuery(userQueryValidationData),
   userIndexController)

router.get('/:id',
   verifyJWTAccessToken,
   validateId,
   validateQuery(userQueryValidationData),
   userShowController
)
router.post('/',
   verifyJWTAccessToken,
   validateBody(userBodyValidationSchema),
   userStoreController)

router.put('/:id',
   verifyJWTAccessToken,
   validateId,
   validateBody(userBodyValidationSchema),
   userUpdateController)

router.delete('/:id',
   verifyJWTAccessToken,
   validateId,
   userDeleteController)

export default router