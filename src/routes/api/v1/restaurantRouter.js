import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { restaurantBodyValidationSchema } from '#validations/api/v1/restaurant/restaurantBodyValidationSchema.js'
import { restaurantQueryValidationData } from '#validations/api/v1/restaurant/restaurantQueryValidationData.js'
import { restaurantIndexController } from '#controllers/api/v1/restaurant/restaurantIndexController.js'
import { restaurantShowController } from '#controllers/api/v1/restaurant/restaurantShowController.js'
import { restaurantStoreController } from '#controllers/api/v1/restaurant/restaurantStoreController.js'
import { restaurantUpdateController } from '#controllers/api/v1/restaurant/restaurantUpdateController.js'
import { restaurantDeleteController } from '#controllers/api/v1/restaurant/restaurantDeleteController.js'
import { generalAuthorization } from '#middlewares/api/v1/authorization/generalAuthorization.js'

const router = express.Router()

router.get('/', validateQuery(restaurantQueryValidationData), restaurantIndexController)

router.get('/:id',
   validateId,
   validateQuery(restaurantQueryValidationData),
   restaurantShowController
)
router.post('/',
   verifyJWTAccessToken, generalAuthorization,
   validateBody(restaurantBodyValidationSchema),
   restaurantStoreController)

router.put('/:id',
   verifyJWTAccessToken, generalAuthorization,
   validateId,
   validateBody(restaurantBodyValidationSchema),
   restaurantUpdateController
)
router.delete('/:id',
   verifyJWTAccessToken, generalAuthorization,
   validateId,
   restaurantDeleteController)

export default router