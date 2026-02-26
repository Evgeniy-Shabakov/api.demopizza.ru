import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { orderCreateBodyValidationSchema } from '#validations/api/v1/order/orderCreateBodyValidationSchema.js'
import { orderUpdateBodyValidationSchema } from '#validations/api/v1/order/orderUpdateBodyValidationSchema.js'
import { orderQueryValidationData } from '#validations/api/v1/order/orderQueryValidationData.js'
import { orderIndexController } from '#controllers/api/v1/order/orderIndexController.js'
import { orderShowController } from '#controllers/api/v1/order/orderShowController.js'
import { orderStoreController } from '#controllers/api/v1/order/orderStoreController.js'
import { orderUpdateController } from '#controllers/api/v1/order/orderUpdateController.js'
import { orderNextStatusController } from '#controllers/api/v1/order/orderNextStatusController.js'
import { orderPreviousStatusController } from '#controllers/api/v1/order/orderPreviousStatusController.js'
import { orderActiveCountController } from '#controllers/api/v1/order/orderActiveCountController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { ORDERS_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/',
   authentication, routeAuthorization(ORDERS_ROUTE_PERMISSIONS.GET_ALL),
   validateQuery(orderQueryValidationData),
   orderIndexController)

router.get('/active-count', orderActiveCountController)

router.get('/:id',
   authentication, routeAuthorization(ORDERS_ROUTE_PERMISSIONS.GET_ONE),
   validateId,
   validateQuery(orderQueryValidationData),
   orderShowController)

router.post('/',
   authentication,
   //надо подумать над авторизацией, не все заказы могут быть созданы просто аутентифицированными
   //пользователями
   //routeAuthorization(ORDERS_ROUTE_PERMISSIONS.CREATE),
   validateBody(orderCreateBodyValidationSchema),
   orderStoreController)

router.patch('/:id',
   authentication, routeAuthorization(ORDERS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(orderUpdateBodyValidationSchema),
   orderUpdateController)

router.patch('/:id/next-status',
   authentication, routeAuthorization(ORDERS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   orderNextStatusController)

router.patch('/:id/previous-status',
   authentication, routeAuthorization(ORDERS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   orderPreviousStatusController)

export default router