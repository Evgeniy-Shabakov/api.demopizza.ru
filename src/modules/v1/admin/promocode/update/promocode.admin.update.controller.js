import { prisma } from '#lib/prisma.js'
import { ErrorPromocode } from '#errors/v1/types/error.promocode.js'

export async function promocodeAdminUpdateController(request, reply) {

   const promocode = await prisma.promocode.findUniqueOrThrow({
      where: { id: request.params.id }
   })

   if (promocode.usedAt) {
      throw new ErrorPromocode('Примененный промокод нельзя редактировать')
   }

   const record = await prisma.promocode.update({
      where: { id: request.params.id },
      data: request.body
   })

   return { data: record }
}