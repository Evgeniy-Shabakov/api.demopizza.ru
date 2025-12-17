import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import config from '#config/config.js'
import { extractToken } from '#utils/auth/JWTHelper.js'
import { AuthError } from '#utils/errors/authError.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const logoutController = baseController(async (req, res) => {
   const token = extractToken(req)

   const user = jwt.verify(token, config.jwtRefreshTokenSecret)

   const deleteResult = await prisma.refreshToken.deleteMany({
      where: { token, userId: user.id }
   })
   if (deleteResult.count === 0) throw new AuthError()

   const userInDB = await prisma.user.findUnique({
      where: { id: user.id }
   })
   if (!userInDB) throw new AuthError()

   res.status(204).send()
})