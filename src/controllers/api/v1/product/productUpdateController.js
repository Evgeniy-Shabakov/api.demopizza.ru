import fs from 'fs/promises'
import slugify from 'slugify'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductResource } from "#resources/api/v1/productResource.js"
import { renameFileName } from "#utils/renameFileName.js"
import { generateUniqueSuffix } from "#utils/generateUniqueSuffix.js"


export const productUpdateController = baseController(async (req, res) => {
   delete req.body.imageFile //без удаления лишних полей prisma выдает ошибку

   const oldRecord = await prisma.product.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   if (req.file) {
      if (oldRecord.imagePath) {
         await fs.unlink(oldRecord.imagePath)
      }
      req.body.imagePath = req.file.destination + req.file.filename
   }

   if (!req.file && oldRecord.name != req.body.name && oldRecord.imagePath) {
      const newImagePath =
         await renameFileName(oldRecord.imagePath, slugify(req.body.name) + '-' + generateUniqueSuffix())
      req.body.imagePath = newImagePath
   }

   const record = await prisma.product.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new ProductResource(record, {}))
})