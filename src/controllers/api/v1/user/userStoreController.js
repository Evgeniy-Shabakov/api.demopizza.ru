import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/UserResource.js"

export const userStoreController = baseController(async (req, res) => {  
   
   const record = await prisma.user.create({
      data: req.body
   })

   res.status(201).json(new UserResource(record, {}))
})