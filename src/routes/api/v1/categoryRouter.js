import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { categoryBodyValidationSchema } from '#validations/api/v1/category/categoryBodyValidationSchema.js'
import { categoryQueryValidationData } from '#validations/api/v1/category/categoryQueryValidationData.js'
import { categoryIndexController } from '#controllers/api/v1/category/categoryIndexController.js'
import { categoryShowController } from '#controllers/api/v1/category/categoryShowController.js'
import { categoryStoreController } from '#controllers/api/v1/category/categoryStoreController.js'
import { categoryUpdateController } from '#controllers/api/v1/category/categoryUpdateController.js'
import { categoryDeleteController } from '#controllers/api/v1/category/categoryDeleteController.js'

const router = express.Router()

router.get('/',
   validateQuery(categoryQueryValidationData),
   categoryIndexController)

router.get('/:id',
   validateId,
   validateQuery(categoryQueryValidationData),
   categoryShowController)

router.post('/',
   verifyJWTAccessToken,
   validateBody(categoryBodyValidationSchema),
   categoryStoreController)

router.put('/:id',
   verifyJWTAccessToken,
   validateId,
   validateBody(categoryBodyValidationSchema),
   categoryUpdateController)

router.delete('/:id',
   verifyJWTAccessToken,
   validateId,
   categoryDeleteController)

export default router