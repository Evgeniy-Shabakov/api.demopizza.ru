import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/UserResource.js"

export const userShowController = baseController(async (req, res) => {

   const record = await prisma.user.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new UserResource(record, {}))
})