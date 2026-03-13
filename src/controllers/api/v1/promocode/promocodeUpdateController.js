import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { PromocodeResource } from "#resources/api/v1/PromocodeResource.js"
import { PromocodeError } from '#errors/api/v1/PromocodeError.js'

export const promocodeUpdateController = baseController(async (req, res) => {

   const promocode = await prisma.promocode.findUniqueOrThrow({
      where: { id: req.params.id }
   })

   if(promocode.usedAt) {
      throw new PromocodeError('Примененный промокод нельзя редактировать')
   }

   const record = await prisma.promocode.update({
      where: { id: req.params.id },
      data: req.body
   })

   res.status(200).json(new PromocodeResource(record, {}))
})