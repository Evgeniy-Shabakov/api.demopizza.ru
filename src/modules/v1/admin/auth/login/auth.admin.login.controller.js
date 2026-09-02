import bcrypt from 'bcrypt'
import { prisma } from '#lib/prisma.js'
import { adminGenerateJWTTokens } from '../auth.admin.generate-jwt.js'
import { jwtEmployeesAccessTokenCookieOption, jwtEmployeesRefreshTokenCookieOption }
   from '../auth.admin.config.js'
import { ErrorUnauthorized } from '#errors/v1/types/error.unauthorized.js'

export async function authAdminLoginController(request, reply) {

   const employee = await prisma.employee.findUnique({
      where: { phone: request.body.phone },
      include: { employeeRoles: true }
   })
   if (!employee) throw new ErrorUnauthorized('Сотрудник c таким номером телефона не найден')
   if (!employee.password) throw new ErrorUnauthorized('Невозможен вход по паролю')

   const isPasswordValid = await bcrypt.compare(request.body.password, employee.password)
   if (!isPasswordValid) throw new ErrorUnauthorized('Неверный пароль')

   const { accessToken, refreshToken } = await adminGenerateJWTTokens(request, employee)

   reply.setCookie('employeeAccessToken', accessToken, jwtEmployeesAccessTokenCookieOption)
   reply.setCookie('employeeRefreshToken', refreshToken, jwtEmployeesRefreshTokenCookieOption)

   return {
      data: employee
   }

}