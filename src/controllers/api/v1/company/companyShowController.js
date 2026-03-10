import { baseController } from "#controllers/api/v1/baseController.js"
import { CompanyResource } from "#resources/api/v1/CompanyResource.js"
import { getCompany } from '#services/companyService.js'

export const companyShowController = baseController(async (req, res) => {

   const record = await getCompany()

   res.status(200).json(new CompanyResource(record, {}))
})