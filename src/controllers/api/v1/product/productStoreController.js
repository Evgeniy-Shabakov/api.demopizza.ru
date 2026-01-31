import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ProductResource } from "#resources/api/v1/ProductResource.js"

export const productStoreController = baseController(async (req, res) => {
   delete req.body.imageFile //без удаления лишних полей prisma выдает ошибку
   
   if (req.file) {
      req.body.imagePath = req.file.destination + req.file.filename
   }

   const record = await prisma.product.create({
      data: req.body
   })

   res.status(201).json(new ProductResource(record, {}))
})