import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { CityResource } from "#resources/api/v1/CityResource.js"

export const cityStoreController = baseController(async (req, res) => {  
   
   const record = await prisma.city.create({
      data: req.body
   })

   res.status(201).json(new CityResource(record, {}))
})