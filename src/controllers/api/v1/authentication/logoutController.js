import jwt from 'jsonwebtoken'
import { prisma } from '#services/prismaClient.js'
import config from '#config/config.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const logoutController = baseController(async (req, res) => {
   const refreshToken = req.cookies.employeeRefreshToken

   try {
      const employees = jwt.verify(refreshToken, config.jwtEmployeesRefreshTokenSecret)

      await prisma.refreshToken.deleteMany({
         where: { token: refreshToken, employeeId: employees.id }
      })
   }
   catch (error) {
      //пропускаем ошибки, чтобы удалить куки в любом случае
   }

   res.clearCookie('employeeAccessToken', config.jwtEmployeesAccessTokenCookieOption)
   res.clearCookie('employeeRefreshToken', config.jwtEmployeesRefreshTokenCookieOption)

   res.status(204).send()
})