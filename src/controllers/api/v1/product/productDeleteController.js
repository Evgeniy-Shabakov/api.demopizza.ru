import fs from 'fs/promises'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const productDeleteController = baseController(async (req, res) => {

   const record = await prisma.product.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   await prisma.product.delete({
      where: { id: req.params.id }
   })

   if(record.imagePath) {
      await fs.unlink(record.imagePath)
   }

   res.status(204).send()
})