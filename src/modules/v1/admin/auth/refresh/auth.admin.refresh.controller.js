import { prisma } from '#lib/prisma.js'
import { adminGenerateJWTTokens } from '../auth.admin.generate-jwt.js'
import { jwtEmployeesAccessTokenCookieOption, jwtEmployeesRefreshTokenCookieOption }
   from '../auth.admin.config.js'
import { ErrorUnauthorized } from '#errors/v1/types/error.unauthorized.js'

export async function authAdminRefreshController(request, reply) {

   const employee = await request.employeeRefreshJwtVerify()

   const deleteResult = await prisma.employeeRefreshToken.deleteMany({
      where: { token: request.cookies.employeeRefreshToken }
   })
   if (deleteResult.count === 0) throw new ErrorUnauthorized('Refresh токен уже отозван или не существует')

   const employeeInDB = await prisma.employee.findUnique({
      where: { id: employee.id },
      include: { employeeRoles: true }
   })
   if (!employeeInDB) throw new ErrorUnauthorized('Пользователь не найден')

   const { accessToken, refreshToken } = await adminGenerateJWTTokens(request, employeeInDB)

   reply.setCookie('employeeAccessToken', accessToken, jwtEmployeesAccessTokenCookieOption)
   reply.setCookie('employeeRefreshToken', refreshToken, jwtEmployeesRefreshTokenCookieOption)

   return reply.code(200).send()
}