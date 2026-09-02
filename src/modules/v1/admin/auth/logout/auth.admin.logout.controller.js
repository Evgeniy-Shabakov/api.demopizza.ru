import { prisma } from '#lib/prisma.js'
import { jwtEmployeesAccessTokenCookieOption, jwtEmployeesRefreshTokenCookieOption }
   from '../auth.admin.config.js'

export async function authAdminLogoutController(request, reply) {

   const refreshToken = request.cookies.employeeRefreshToken

   try {
      if (refreshToken) {
         await prisma.employeeRefreshToken.deleteMany({
            where: { token: refreshToken }
         })
      }
   }
   catch (error) {
      //пропускаем ошибки, чтобы удалить куки в любом случае
   }

   reply.clearCookie('employeeAccessToken', jwtEmployeesAccessTokenCookieOption)
   reply.clearCookie('employeeRefreshToken', jwtEmployeesRefreshTokenCookieOption)

   return reply.code(204).send()

}