import { prisma } from '#lib/prisma.js'
import { addBonusCoins } from '#modules/v1/shared/bonus-coins.service.js'
import { ErrorPromocode } from '#errors/v1/types/error.promocode.js'

export async function promocodeClientActivateController(request, reply) {

   let promocode

   await prisma.$transaction(async (tx) => {

      try {
         promocode = await tx.promocode.update({
            where: {
               code: request.body.code,
               isActive: true,                 //защита от race condition
               usedAt: null                    //защита от race condition
            },
            data: {
               isActive: false,
               usedAt: new Date(),
               userId: request.user.id,
            }
         })

         await addBonusCoins({
            userId: request.user.id,
            amount: promocode.bonusCoins,
            promocodeId: promocode.id,
            reason: 'Активация промокода',
            tx
         })
      }
      catch (error) {
         if (error.code === 'P2025') {
            promocode = await prisma.promocode.findUnique({
               where: { code: request.body.code }
            })

            if (!promocode) throw new ErrorPromocode('Промокод не найден')
            if (promocode.usedAt) throw new ErrorPromocode('Промокод уже активирован')
            if (!promocode.isActive) throw new ErrorPromocode('Промокод не активен')

            throw new ErrorPromocode('Промокод не может быть активирован')
         }

         throw error
      }
   })

   return {
      data: {
         success: true,
         message: 'Промокод успешно активирован',
         bonusCoins: promocode.bonusCoins
      }
   }
}