import express from 'express'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { productRestaurantBodyValidationSchema } from '#validations/api/v1/productRestaurant/productRestaurantBodyValidationSchema.js'
import { productRestaurantQueryValidationData } from '#validations/api/v1/productRestaurant/productRestaurantQueryValidationData.js'
import { productRestaurantIndexController } from '#controllers/api/v1/productRestaurant/productRestaurantIndexController.js'
import { productRestaurantShowController } from '#controllers/api/v1/productRestaurant/productRestaurantShowController.js'
import { productRestaurantStoreController } from '#controllers/api/v1/productRestaurant/productRestaurantStoreController.js'
import { productRestaurantUpdateController } from '#controllers/api/v1/productRestaurant/productRestaurantUpdateController.js'
import { productRestaurantDeleteController } from '#controllers/api/v1/productRestaurant/productRestaurantDeleteController.js'

const router = express.Router()

router.get('/', validateQuery(productRestaurantQueryValidationData), productRestaurantIndexController)

router.get('/:id',
   validateId,
   validateQuery(productRestaurantQueryValidationData),
   productRestaurantShowController
)
router.post('/', validateBody(productRestaurantBodyValidationSchema), productRestaurantStoreController)

router.put('/:id',
   validateId,
   validateBody(productRestaurantBodyValidationSchema),
   productRestaurantUpdateController
)
router.delete('/:id', validateId, productRestaurantDeleteController)

export default router