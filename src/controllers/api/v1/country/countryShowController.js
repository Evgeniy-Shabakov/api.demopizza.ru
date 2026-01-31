import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CountryResource } from "#resources/api/v1/CountryResource.js"

export const countryShowController = baseController(async (req, res) => {

   const record = await prisma.country.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new CountryResource(record, {}))
})