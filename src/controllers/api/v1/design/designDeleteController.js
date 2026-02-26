import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const designDeleteController = baseController(async (req, res) => {

   await prisma.design.delete({
      where: { id: req.params.id }
   })

   res.status(204).send()
})