import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/userResource.js"
import { generateJWTTokens } from '#utils/auth/JWTHelper.js'
import { nodeCache } from '#services/nodeCache.js'
import { AuthError } from '#utils/errors/authError.js'

export const loginController = baseController(async (req, res) => {
   let user

   if (req.body?.loginTgBotLink) {
      const cacheData = nodeCache.get(req.body.loginTgBotLink)

      if (!cacheData) throw new AuthError(403, 'Ссылка на телеграм устарела')
      if (cacheData.status !== 'verified') throw new AuthError(403, 'Номер телефона не подтвержден')

      user = await prisma.user.findUnique({
         where: { phone: cacheData.phone }
      })
   }

   if(!user) throw new AuthError(403, 'Пользователя нет в БД')

   const tokens = await generateJWTTokens(req, user)

   res.json({
      ...tokens,
      user: new UserResource(user)
   })
})

// if (!user) {
//    user = await prisma.user.create({
//       data: { phone: phone }
//    })
// }