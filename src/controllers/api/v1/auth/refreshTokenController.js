import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import config from '#config/config.js'
import { generateJWTTokens } from '#utils/auth/generateJWTTokens.js'
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const refreshTokenController = baseController(async (req, res) => {
   const token = req.cookies.refreshToken

   const user = jwt.verify(token, config.jwtRefreshTokenSecret)

   const deleteResult = await prisma.refreshToken.deleteMany({
      where: { token, userId: user.id }
   })
   if (deleteResult.count === 0) throw new UnauthorizedError('Refresh токен уже отозван или не существует')

   const userInDB = await prisma.user.findUnique({
      where: { id: user.id }
   })
   if (!userInDB) throw new UnauthorizedError('Пользователь не найден')

   const { accessToken, refreshToken } = await generateJWTTokens(req, user)

   res.cookie('accessToken', accessToken, config.jwtAccessTokenCookieOption)
   res.cookie('refreshToken', refreshToken, config.jwtRefreshTokenCookieOption)

   res.status(200).end()
})