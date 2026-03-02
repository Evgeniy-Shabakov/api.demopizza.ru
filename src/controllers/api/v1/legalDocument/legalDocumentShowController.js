import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { legalDocumentResource } from "#resources/api/v1/legalDocumentResource.js"

export const legalDocumentShowController = baseController(async (req, res) => {

   const record = await prisma.legalDocument.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   res.status(200).json(new legalDocumentResource(record, {}))
})