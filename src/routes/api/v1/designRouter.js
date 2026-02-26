import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { designBodyValidationSchema } from '#validations/api/v1/design/designBodyValidationSchema.js'
import { designQueryValidationData } from '#validations/api/v1/design/designQueryValidationData.js'
import { designIndexController } from '#controllers/api/v1/design/designIndexController.js'
import { designShowController } from '#controllers/api/v1/design/designShowController.js'
import { designStoreController } from '#controllers/api/v1/design/designStoreController.js'
import { designUpdateController } from '#controllers/api/v1/design/designUpdateController.js'
import { designDeleteController } from '#controllers/api/v1/design/designDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { DESIGN_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   validateQuery(designQueryValidationData),
   designIndexController)

router.get('/:id',
   validateId,
   validateQuery(designQueryValidationData),
   designShowController)

router.post('/', 
   authentication, routeAuthorization(DESIGN_ROUTE_PERMISSIONS.CREATE),
   validateBody(designBodyValidationSchema),
   designStoreController)

router.put('/:id',
   authentication, routeAuthorization(DESIGN_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(designBodyValidationSchema),
   designUpdateController
)
router.delete('/:id',
   authentication, routeAuthorization(DESIGN_ROUTE_PERMISSIONS.DELETE),
   validateId,
   designDeleteController)

export default router