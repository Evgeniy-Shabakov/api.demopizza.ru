import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { legalDocumentResource } from "#resources/api/v1/legalDocumentResource.js"

export const legalDocumentStoreController = baseController(async (req, res) => {
   delete req.body.docFile //без удаления лишних полей prisma выдает ошибку
   
   if (req.file) {
      req.body.filePath = req.file.destination + req.file.filename
   }

   const record = await prisma.legalDocument.create({
      data: req.body
   })

   res.status(201).json(new legalDocumentResource(record, {}))
})