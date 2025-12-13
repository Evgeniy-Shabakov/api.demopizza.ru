import { prisma } from '#services/prismaClient.js'

async function deleteOldRefreshTokens() {
   try {
      const result = await prisma.refreshToken.deleteMany({
         where: {
            OR: [
               { expiresAt: { lt: new Date() } },
               { isRevoked: true }
            ]
         }
      })

      console.log(`Удалено ${result.count} токенов`)
   }
   catch (error) {
      console.error('Ошибка при очистке токенов:', error)
   }
}

deleteOldRefreshTokens()