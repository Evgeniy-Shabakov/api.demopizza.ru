import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CityResource } from "#resources/api/v1/cityResource.js"

export const cityIndexController = baseController(async (req, res) => {

   const records = await prisma.city.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(CityResource.collection(records, {}))
})
