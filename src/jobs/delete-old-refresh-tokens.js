import 'dotenv/config'                   //без подгрузки env не работает
import { prisma } from '#lib/prisma.js'

async function deleteOldRefreshTokens() {
   try {
      const employeeResult = await prisma.employeeRefreshToken.deleteMany({
         where: {
            OR: [
               { expiresAt: { lt: new Date() } },
               { isRevoked: true }
            ]
         }
      })

      console.log(`Сотрудники: удалено ${employeeResult.count} токенов`)

      const userResult = await prisma.userRefreshToken.deleteMany({
         where: {
            OR: [
               { expiresAt: { lt: new Date() } },
               { isRevoked: true }
            ]
         }
      })

      console.log(`Клиенты: удалено ${userResult.count} токенов`)
   }
   catch (error) {
      console.error('Ошибка при очистке токенов:', error)
   }
}

await deleteOldRefreshTokens()