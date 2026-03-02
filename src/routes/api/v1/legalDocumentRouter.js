import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { validateId } from '#middlewares/api/v1/validators/validateId.js'
import { validateBody } from '#middlewares/api/v1/validators/validateBody.js'
import { validateQuery } from '#middlewares/api/v1/validators/validateQuery.js'
import { legalDocumentBodyValidationSchema } from '#validations/api/v1/legalDocument/legalDocumentBodyValidationSchema.js'
import { legalDocumentQueryValidationData } from '#validations/api/v1/legalDocument/legalDocumentQueryValidationData.js'
import { legalDocumentFileLoading } from '#middlewares/api/v1/fileLoading/legalDocumentFileLoading.js'
import { legalDocumentIndexController } from '#controllers/api/v1/legalDocument/legalDocumentIndexController.js'
import { legalDocumentShowController } from '#controllers/api/v1/legalDocument/legalDocumentShowController.js'
import { legalDocumentStoreController } from '#controllers/api/v1/legalDocument/legalDocumentStoreController.js'
import { legalDocumentUpdateController } from '#controllers/api/v1/legalDocument/legalDocumentUpdateController.js'
import { legalDocumentDeleteController } from '#controllers/api/v1/legalDocument/legalDocumentDeleteController.js'
import { routeAuthorization } from '#middlewares/api/v1/authorization/routeAuthorization.js'
import { LEGAL_DOCUMENTS_ROUTE_PERMISSIONS } from '#constants/api/v1/permissions/modelsRoutePermissions.js'

const router = express.Router()

router.get('/', validateQuery(legalDocumentQueryValidationData), legalDocumentIndexController)

router.get('/:id',
   validateId,
   validateQuery(legalDocumentQueryValidationData),
   legalDocumentShowController)
   
router.post('/',
   authentication, routeAuthorization(LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.CREATE),
   legalDocumentFileLoading,
   validateBody(legalDocumentBodyValidationSchema),
   legalDocumentStoreController)

router.put('/:id',
   authentication, routeAuthorization(LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.UPDATE),
   validateId,
   legalDocumentFileLoading,
   validateBody(legalDocumentBodyValidationSchema),
   legalDocumentUpdateController)

router.delete('/:id',
   authentication, routeAuthorization(LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.DELETE),
   validateId,
   legalDocumentDeleteController)

export default router