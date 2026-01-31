import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CityResource } from "#resources/api/v1/CityResource.js"

export const cityUpdateController = baseController(async (req, res) => {
   
   const record = await prisma.city.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new CityResource(record, {}))
})