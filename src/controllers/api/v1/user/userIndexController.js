import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/UserResource.js"

export const userIndexController = baseController(async (req, res) => {

   const records = await prisma.user.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(UserResource.collection(records, {}))
})
