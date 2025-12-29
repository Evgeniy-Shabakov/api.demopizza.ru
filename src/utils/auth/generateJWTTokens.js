import jwt from 'jsonwebtoken'
import config from '#config/config.js'
import { prisma } from '#services/prismaClient.js'

export async function generateJWTTokens(req, user) {
   const userPayload = { id: user.id, phone: user.phone, roles: user.roles }

   const accessToken = generateJWTAccessToken(userPayload)
   const refreshToken = generateJWTRefreshToken(userPayload)

   await prisma.refreshToken.create({
      data: {
         token: refreshToken,
         userId: user.id,
         expiresAt: new Date(jwt.decode(refreshToken).exp * 1000),
         userAgent: req.get('User-Agent') || null,
         ipAddress: req.ip || req.connection.remoteAddress || null
      }
   })

   return {
      accessToken,
      refreshToken
   }
}

function generateJWTAccessToken(payload) {
   return jwt.sign(
      payload,
      config.jwtAccessTokenSecret,
      { expiresIn: config.jwtAccessTokenLiveTime }
   )
}

function generateJWTRefreshToken(payload) {
   return jwt.sign(
      payload,
      config.jwtRefreshTokenSecret,
      { expiresIn: config.jwtRefreshTokenLiveTime }
   )
}