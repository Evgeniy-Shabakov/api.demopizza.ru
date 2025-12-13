import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const countryDeleteController = baseController(async (req, res) => {

   await prisma.country.delete({
      where: { id: req.params.id }
   })

   res.status(204).send()
})