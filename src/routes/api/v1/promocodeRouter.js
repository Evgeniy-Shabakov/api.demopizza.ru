import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { promocodeCreateBodyValidationSchema } from '#validations/api/v1/promocode/promocodeCreateBodyValidationSchema.js'
import { promocodeUpdateBodyValidationSchema } from '#validations/api/v1/promocode/promocodeUpdateBodyValidationSchema.js'
import { promocodeActivateBodyValidationSchema } from '#validations/api/v1/promocode/promocodeActivateBodyValidationSchema.js'
import { promocodeQueryValidationData } from '#validations/api/v1/promocode/promocodeQueryValidationData.js'
import { promocodeIndexController } from '#controllers/api/v1/promocode/promocodeIndexController.js'
import { promocodeShowController } from '#controllers/api/v1/promocode/promocodeShowController.js'
import { promocodeStoreController } from '#controllers/api/v1/promocode/promocodeStoreController.js'
import { promocodeUpdateController } from '#controllers/api/v1/promocode/promocodeUpdateController.js'
import { promocodeActivateController } from '#controllers/api/v1/promocode/promocodeActivateController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { PROMOCODE_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   authentication, routeAuthorization(PROMOCODE_ROUTE_PERMISSIONS.GET_ALL),
   validateQuery(promocodeQueryValidationData),
   promocodeIndexController)

router.get('/:id',
   authentication, routeAuthorization(PROMOCODE_ROUTE_PERMISSIONS.GET_ONE),
   validateId,
   promocodeShowController)

router.post('/',
   authentication, routeAuthorization(PROMOCODE_ROUTE_PERMISSIONS.CREATE),
   validateBody(promocodeCreateBodyValidationSchema),
   promocodeStoreController)

router.patch('/:id',
   authentication, routeAuthorization(PROMOCODE_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(promocodeUpdateBodyValidationSchema),
   promocodeUpdateController)

router.post('/activate',
   authentication,
   validateBody(promocodeActivateBodyValidationSchema),
   promocodeActivateController)

export default router