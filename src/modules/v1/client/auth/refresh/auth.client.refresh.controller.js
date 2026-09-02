import { prisma } from '#lib/prisma.js'
import { clientGenerateJwtTokens } from '../auth.client.generate-jwt.js'
import { jwtUserAccessTokenCookieOption, jwtUserRefreshTokenCookieOption }
   from '../auth.client.config.js'
import { ErrorUnauthorized } from '#errors/v1/types/error.unauthorized.js'

export async function authClientRefreshController(request, reply) {

   const user = await request.userRefreshJwtVerify()

   const deleteResult = await prisma.userRefreshToken.deleteMany({
      where: { token: request.cookies.userRefreshToken }
   })
   if (deleteResult.count === 0) throw new ErrorUnauthorized('Refresh токен уже отозван или не существует')

   const userInDB = await prisma.user.findUnique({
      where: { id: user.id }
   })
   if (!userInDB) throw new ErrorUnauthorized('Пользователь не найден')

   const { accessToken, refreshToken } = await clientGenerateJwtTokens(request, userInDB)

   reply.setCookie('userAccessToken', accessToken, jwtUserAccessTokenCookieOption)
   reply.setCookie('userRefreshToken', refreshToken, jwtUserRefreshTokenCookieOption)

   return reply.code(200).send()
}