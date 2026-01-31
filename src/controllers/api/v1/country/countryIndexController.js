import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CountryResource } from "#resources/api/v1/CountryResource.js"


export const countryIndexController = baseController(async (req, res) => {

   const records = await prisma.country.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(CountryResource.collection(records, {}))
})