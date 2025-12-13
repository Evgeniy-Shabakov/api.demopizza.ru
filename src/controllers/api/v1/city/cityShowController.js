import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CityResource } from "#resources/api/v1/cityResource.js"

export const cityShowController = baseController(async (req, res) => {

   const record = await prisma.city.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new CityResource(record, {}))
})