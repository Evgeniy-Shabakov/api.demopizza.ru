import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import config from '#config/config.js'
import { extractToken } from '#utils/auth/JWTHelper.js'
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const logoutController = baseController(async (req, res) => {
   const token = extractToken(req)

   const user = jwt.verify(token, config.jwtRefreshTokenSecret)

   const deleteResult = await prisma.refreshToken.deleteMany({
      where: { token, userId: user.id }
   })
   if (deleteResult.count === 0) throw new UnauthorizedError('Токен уже отозван или не существует')

   const userInDB = await prisma.user.findUnique({
      where: { id: user.id }
   })
   if (!userInDB) throw new UnauthorizedError('Пользователь не найден')

   res.status(204).send()
})