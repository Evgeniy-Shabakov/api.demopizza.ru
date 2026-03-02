import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { legalDocumentResource } from "#resources/api/v1/legalDocumentResource.js"


export const legalDocumentIndexController = baseController(async (req, res) => {

   const records = await prisma.legalDocument.findMany({
      orderBy: req.sort
   })

   res.status(200).json(legalDocumentResource.collection(records, {}))
})
