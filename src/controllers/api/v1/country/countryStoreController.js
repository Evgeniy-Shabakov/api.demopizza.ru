import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CountryResource } from "#resources/api/v1/CountryResource.js"

export const countryStoreController = baseController(async (req, res) => {

   const record = await prisma.country.create({
      data: req.body
   })

   res.status(201).json(new CountryResource(record, {}))
})