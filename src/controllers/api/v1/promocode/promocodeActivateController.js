import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { PromocodeError } from '#errors/api/v1/PromocodeError.js'
import { addBonusCoins } from '#services/bonusCoinsService.js'

export const promocodeActivateController = baseController(async (req, res) => {

   let promocode

   await prisma.$transaction(async (tx) => {

      try {
         promocode = await tx.promocode.update({
            where: {
               code: req.body.code,
               isActive: true,                 //защита от race condition
               usedAt: null                    //защита от race condition
            },
            data: {
               isActive: false,
               usedAt: new Date(),
               userId: req.user.id,
            }
         })

         await addBonusCoins({
            userId: req.user.id,
            amount: promocode.bonusCoins,
            promocodeId: promocode.id,
            reason: 'Активация промокода',
            tx
         })
      }
      catch (error) {
         if (error.code === 'P2025') {
            promocode = await prisma.promocode.findUnique({
               where: { code: req.body.code }
            })

            if (!promocode) throw new PromocodeError('Промокод не найден')
            if (promocode.usedAt) throw new PromocodeError('Промокод уже активирован')
            if (!promocode.isActive) throw new PromocodeError('Промокод не активен')

            throw new PromocodeError('Промокод не может быть активирован')
         }

         throw error
      }
   })

   res.status(200).json({
      success: true,
      message: 'Промокод успешно активирован',
      bonusCoins: promocode.bonusCoins,
   })
})