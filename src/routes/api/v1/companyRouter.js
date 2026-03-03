import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { companyBodyValidationSchema } from '#validations/api/v1/company/companyBodyValidationSchema.js'
import { companyFilesLoading } from '#middlewares/api/v1/fileLoading/companyFilesLoading.js'
import { companyShowController } from '#controllers/api/v1/company/companyShowController.js'
import { companyUpdateController } from '#controllers/api/v1/company/companyUpdateController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { COMPANY_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/', companyShowController)

router.put('/',
   authentication, routeAuthorization(COMPANY_ROUTE_PERMISSIONS.UPDATE),
   companyFilesLoading,
   validateBody(companyBodyValidationSchema),
   companyUpdateController)

export default router