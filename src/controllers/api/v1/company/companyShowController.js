import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CompanyResource } from "#resources/api/v1/CompanyResource.js"

export const companyShowController = baseController(async (req, res) => {

   const record = await prisma.company.findFirstOrThrow()

   res.status(200).json(new CompanyResource(record, {}))
})