import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CountryResource } from "#resources/api/v1/CountryResource.js"

export const countryUpdateController = baseController(async (req, res) => {

   const record = await prisma.country.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new CountryResource(record, {}))
})