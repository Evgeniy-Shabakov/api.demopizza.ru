import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { employeeBodyValidationSchema } from '#validations/api/v1/employee/employeeBodyValidationSchema.js'
import { employeeQueryValidationData } from '#validations/api/v1/employee/employeeQueryValidationData.js'
import { employeeIndexController } from '#controllers/api/v1/employee/employeeIndexController.js'
import { employeeShowController } from '#controllers/api/v1/employee/employeeShowController.js'
import { employeeStoreController } from '#controllers/api/v1/employee/employeeStoreController.js'
import { employeeUpdateController } from '#controllers/api/v1/employee/employeeUpdateController.js'
import { employeeDeleteController } from '#controllers/api/v1/employee/employeeDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { EMPLOYEES_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'
import { employeeAuthorization } from '#middlewares/api/v1/authorization/employeeAuthorization.js'

const router = express.Router()

router.get('/',
   authentication, routeAuthorization(EMPLOYEES_ROUTE_PERMISSIONS.GET_ALL),
   validateQuery(employeeQueryValidationData),
   employeeIndexController)

router.get('/:id',
   authentication, routeAuthorization(EMPLOYEES_ROUTE_PERMISSIONS.GET_ONE),
   validateId,
   validateQuery(employeeQueryValidationData), employeeAuthorization,
   employeeShowController
)
router.post('/',
   authentication, routeAuthorization(EMPLOYEES_ROUTE_PERMISSIONS.CREATE),
   validateBody(employeeBodyValidationSchema), employeeAuthorization,
   employeeStoreController)

router.put('/:id',
   authentication, routeAuthorization(EMPLOYEES_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   validateBody(employeeBodyValidationSchema), employeeAuthorization,
   employeeUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(EMPLOYEES_ROUTE_PERMISSIONS.DELETE),
   validateId, employeeAuthorization,
   employeeDeleteController)

export default router