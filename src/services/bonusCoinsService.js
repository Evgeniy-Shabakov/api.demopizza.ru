import { prisma } from '#services/prismaClient.js'

// проверять userId на подлог
// проверять баллы которые надо списать и начислить
// для супер точности при работе с деньгами лучше использовать Decimal

async function isBonusCoinsAllowed() {
   const company = await prisma.company.findFirstOrThrow()

   return company.isBonusCoinsEnabled
}

export async function reserveBonusCoins(userId, amount, tx) {
   if (await isBonusCoinsAllowed() == false) return

   const [user] = await tx.$queryRaw`  
            SELECT * FROM "users" WHERE id = ${userId} FOR UPDATE`
   // другой параллельный запрос не сможет изменить баланс т.к. FOR UPDATE

   if (!user) throw new Error('Пользователь не найден')

   if (Number(user.bonus_coins) < amount) {
      throw new Error('Недостаточно бонусных баллов')
   }
}

export async function updateBonusCoins({ userId, amount, orderId, reason, tx }) {
   if (await isBonusCoinsAllowed() == false) return

   const user = await tx.user.update({
      where: { id: userId },
      data: {
         bonusCoins: {
            increment: amount
         }
      }
   })

   await tx.bonusCoinsTransaction.create({
      data: {
         userId: userId,
         amount: amount,
         balanceAfter: user.bonusCoins,
         reason: reason,
         orderId: orderId
      }
   })
}

export async function reverseBonusCoinsForOrder({ orderId, reason, tx }) {
   if (await isBonusCoinsAllowed() == false) return

   const transactions = await tx.bonusCoinsTransaction.findMany({
      where: { orderId: orderId }
   })

   for (const t of transactions) {
      await updateBonusCoins({
         userId: t.userId,
         amount: -t.amount,
         orderId: orderId,
         reason: reason,
         tx
      })
   }
}