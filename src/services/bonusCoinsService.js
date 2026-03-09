// проверять userId на подлог
// проверять баллы которые надо списать и начислить
// для супер точности при работе с деньгами лучше использовать Decimal

function isBonusCoinsAllowed() {
   //будет проверка включена ли бонусная  программа
   return true
}

export async function reserveBonusCoins(userId, amount, tx) {
   if (!isBonusCoinsAllowed()) return

   const [user] = await tx.$queryRaw`  
            SELECT * FROM "users" WHERE id = ${userId} FOR UPDATE`
   // другой параллельный запрос не сможет изменить баланс т.к. FOR UPDATE

   if (!user) throw new Error('Пользователь не найден')

   if (Number(user.bonus_coins) < amount) {
      throw new Error('Недостаточно бонусных баллов')
   }
}

export async function updateBonusCoins({ userId, amount, orderId, reason, tx }) {
   if (!isBonusCoinsAllowed()) return

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
   if (!isBonusCoinsAllowed()) return

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