import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/userResource.js"
import { generateJWTAccessToken, generateJWTRefreshToken } from '#utils/auth/generateJWTTokens.js'

export const loginController = baseController(async (req, res) => {

   const phone = req.body.phone
   const userAgent = req.get('User-Agent') || null
   const ipAddress = req.ip || req.connection.remoteAddress || null

   let user = await prisma.user.findUnique({
      where: { phone: phone }
   })

   if (!user) {
      user = await prisma.user.create({
         data: { phone: phone }
      })
   }

   const userPayload = { id: user.id, phone: user.phone }

   const accessToken = generateJWTAccessToken(userPayload)
   const refreshToken = generateJWTRefreshToken(userPayload)

   const decoded = jwt.decode(refreshToken)
   const expiresAt = new Date(decoded.exp * 1000)

   await prisma.refreshToken.create({
      data: {
         token: refreshToken,
         userId: user.id,
         expiresAt,
         userAgent,
         ipAddress
      }
   })

   res.json({
      accessToken,
      refreshToken,
      user: new UserResource(user)
   })
})