import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { restaurantScheduleBodyValidationSchema } from '#validations/api/v1/restaurantSchedule/restaurantScheduleBodyValidationSchema.js'
import { restaurantScheduleQueryValidationData } from '#validations/api/v1/restaurantSchedule/restaurantScheduleQueryValidationData.js'
import { restaurantScheduleIndexController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleIndexController.js'
import { restaurantScheduleShowController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleShowController.js'
import { restaurantScheduleStoreController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleStoreController.js'
import { restaurantScheduleUpdateController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleUpdateController.js'
import { restaurantScheduleDeleteController } from '#controllers/api/v1/restaurantSchedule/restaurantScheduleDeleteController.js'

const router = express.Router()

router.get('/',
   validateQuery(restaurantScheduleQueryValidationData),
   restaurantScheduleIndexController)

router.get('/:id',
   validateId,
   validateQuery(restaurantScheduleQueryValidationData),
   restaurantScheduleShowController
)
router.post('/',
   verifyJWTAccessToken,
   validateBody(restaurantScheduleBodyValidationSchema),
   restaurantScheduleStoreController)

router.put('/:id',
   verifyJWTAccessToken,
   validateId,
   validateBody(restaurantScheduleBodyValidationSchema),
   restaurantScheduleUpdateController)

router.delete('/:id',
   verifyJWTAccessToken,
   validateId,
   restaurantScheduleDeleteController)

export default router