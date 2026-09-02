import { prisma } from '#lib/prisma.js'
import { jwtUserAccessTokenCookieOption, jwtUserRefreshTokenCookieOption }
   from '../auth.client.config.js'

export async function authClientLogoutController(request, reply) {

   const refreshToken = request.cookies.userRefreshToken

   try {
      if (refreshToken) {
         await prisma.userRefreshToken.deleteMany({
            where: { token: refreshToken }
         })
      }
   }
   catch (error) {
      //пропускаем ошибки, чтобы удалить куки в любом случае
   }

   reply.clearCookie('userAccessToken', jwtUserAccessTokenCookieOption)
   reply.clearCookie('userRefreshToken', jwtUserRefreshTokenCookieOption)

   return reply.code(204).send()

}