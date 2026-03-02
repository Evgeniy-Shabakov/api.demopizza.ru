import fs from 'fs/promises'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const legalDocumentDeleteController = baseController(async (req, res) => {

   const record = await prisma.legalDocument.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   await prisma.legalDocument.delete({
      where: { id: req.params.id }
   })

   if(record.filePath) {
      await fs.unlink(record.filePath)
   }

   res.status(204).send()
})