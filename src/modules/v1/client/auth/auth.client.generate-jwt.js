import { prisma } from '#lib/prisma.js'

export async function clientGenerateJwtTokens(request, user) {

   const jwtPayload = {
      id: user.id,
      phone: user.phone
   }

   const accessToken = request.server.jwt.userAccess.sign(jwtPayload)
   const refreshToken = request.server.jwt.userRefresh.sign(jwtPayload)

   await prisma.userRefreshToken.create({
      data: {
         token: refreshToken,
         userId: user.id,
         expiresAt: new Date(request.server.jwt.userRefresh.decode(refreshToken).exp * 1000)
      }
   })

   return { accessToken, refreshToken }
}