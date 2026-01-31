import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import config from '#config/config.js'
import { generateJWTTokens } from '#utils/api/v1/JWT/generateJWTTokens.js'
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const refreshTokenController = baseController(async (req, res) => {
   const token = req.cookies.employeeRefreshToken

   const employee = jwt.verify(token, config.jwtEmployeesRefreshTokenSecret)

   const deleteResult = await prisma.refreshToken.deleteMany({
      where: { token, employeeId: employee.id }
   })
   if (deleteResult.count === 0) throw new UnauthorizedError('Refresh токен уже отозван или не существует')

   const employeeInDB = await prisma.employee.findUnique({
      where: { id: employee.id },
      include: { employeeRoles: true }
   })
   if (!employeeInDB) throw new UnauthorizedError('Сотрудник не найден')

   const { accessToken, refreshToken } = await generateJWTTokens(req, employeeInDB)

   res.cookie('employeeAccessToken', accessToken, config.jwtEmployeesAccessTokenCookieOption)
   res.cookie('employeeRefreshToken', refreshToken, config.jwtEmployeesRefreshTokenCookieOption)

   res.status(200).end()
})