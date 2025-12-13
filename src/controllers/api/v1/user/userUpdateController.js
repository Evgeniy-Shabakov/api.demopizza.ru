import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/userResource.js"

export const userUpdateController = baseController(async (req, res) => {
   
   const record = await prisma.user.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new UserResource(record, {}))
})