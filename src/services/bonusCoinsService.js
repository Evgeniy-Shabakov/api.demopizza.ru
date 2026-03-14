// проверять userId на подлог
// проверять баллы которые надо списать и начислить
// для супер точности при работе с деньгами лучше использовать Decimal

export async function reserveBonusCoins(userId, amount, tx) {
   const [user] = await tx.$queryRaw`  
            SELECT * FROM "users" WHERE id = ${userId} FOR UPDATE`
   // другой параллельный запрос не сможет изменить баланс т.к. FOR UPDATE

   if (!user) throw new Error('Ошибка бонусной программы: пользователь не найден')

   if (Number(user.bonus_coins) < amount) {
      throw new Error('Ошибка бонусной программы: недостаточно бонусных баллов')
   }
}

async function updateBonusCoins({ userId, amount, orderId, promocodeId, reason, tx }) {
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
         orderId: orderId,
         promocodeId: promocodeId
      }
   })
}

export async function addBonusCoins({ userId, amount, orderId, promocodeId, reason, tx }) {
   if (amount <= 0) throw new Error('Amount для addBonusCoins должен быть положительным')

   await updateBonusCoins({ userId, amount, orderId, promocodeId, reason, tx })
}

export async function spendBonusCoins({ userId, amount, orderId, promocodeId, reason, tx }) {
   if (amount <= 0) throw new Error('Amount для spendBonusCoins должен быть положительным')

   await updateBonusCoins({ userId, amount: -amount, orderId, promocodeId, reason, tx })
}

export async function reverseBonusCoinsForOrder({ orderId, reason, tx }) {
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