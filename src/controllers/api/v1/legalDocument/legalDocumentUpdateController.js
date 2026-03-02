import fs from 'fs/promises'
import slugify from 'slugify'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { legalDocumentResource } from "#resources/api/v1/legalDocumentResource.js"
import { renameFileName } from "#utils/api/v1/renameFileName.js"
import { generateUniqueSuffix } from "#utils/api/v1/generateUniqueSuffix.js"


export const legalDocumentUpdateController = baseController(async (req, res) => {
   delete req.body.docFile //без удаления лишних полей prisma выдает ошибку

   const oldRecord = await prisma.legalDocument.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   if (req.file) {
      if (oldRecord.filePath) {
         await fs.unlink(oldRecord.filePath)
      }
      req.body.filePath = req.file.destination + req.file.filename
   }

   if (!req.file && oldRecord.name != req.body.name && oldRecord.filePath) {
      const newFilePath =
         await renameFileName(oldRecord.filePath, slugify(req.body.name) + '-' + generateUniqueSuffix())
      req.body.filePath = newFilePath
   }

   const record = await prisma.legalDocument.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new legalDocumentResource(record, {}))
})