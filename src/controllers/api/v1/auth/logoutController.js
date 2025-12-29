import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import config from '#config/config.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const logoutController = baseController(async (req, res) => {
   const refreshToken = req.cookies.refreshToken

   try {
      const user = jwt.verify(refreshToken, config.jwtRefreshTokenSecret)

      await prisma.refreshToken.deleteMany({
         where: { token: refreshToken, userId: user.id }
      })
   }
   catch (error) {
      //пропускаем ошибки, чтобы удалить куки в любом случае
   }

   res.clearCookie('accessToken', config.jwtAccessTokenCookieOption)
   res.clearCookie('refreshToken', config.jwtRefreshTokenCookieOption)

   res.status(204).send()
})