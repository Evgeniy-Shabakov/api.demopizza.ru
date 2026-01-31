import bcrypt from 'bcrypt'
import config from '#config/config.js'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { EmployeeResource } from "#resources/api/v1/EmployeeResource.js"
import { generateJWTTokens } from '#utils/api/v1/JWT/generateJWTTokens.js'
import { nodeCache } from '#services/nodeCache.js'
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'

export const loginController = baseController(async (req, res) => {
   let employee

   if (req.body) {
      employee = await findOrFailEmployeeWithRoles(req.body.phone)

      if (!employee.password) throw new UnauthorizedError('Невозможен вход по паролю')

      const isPasswordValid = await bcrypt.compare(req.body.password, employee.password)

      if (!isPasswordValid) throw new UnauthorizedError('Неверный пароль')
   }
   else if (req.cookies.authTgBotLoginLink && req.cookies.authTgBotLoginSessionID) {
      const cacheData = nodeCache.get(req.cookies.authTgBotLoginLink)

      if (!cacheData) {
         throw new UnauthorizedError('Ссылка на телеграм устарела')
      }
      if (cacheData.authTgBotLoginSessionID !== req.cookies.authTgBotLoginSessionID) {
         throw new UnauthorizedError('Сессия аутентификации не совпадает')
      }
      if (cacheData.status !== 'verified') {
         throw new UnauthorizedError('Номер телефона не подтвержден')
      }

      employee = await findOrFailEmployeeWithRoles(cacheData.phone)
   }
   else {
      throw new UnauthorizedError('Недостаточно данных для входа')
   }

   const { accessToken, refreshToken } = await generateJWTTokens(req, employee)

   res.cookie('employeeAccessToken', accessToken, config.jwtEmployeesAccessTokenCookieOption)
   res.cookie('employeeRefreshToken', refreshToken, config.jwtEmployeesRefreshTokenCookieOption)

   res.json({
      data: {
         employee: new EmployeeResource(employee)
      }
   })
})

async function findOrFailEmployeeWithRoles(phone) {
   if (!phone.startsWith('+')) {
      phone = '+' + phone
   }

   const employee = await prisma.employee.findUnique({
      where: { phone: phone },
      include: { employeeRoles: true }
   })

   if (!employee) throw new UnauthorizedError('Сотрудник c таким номером телефона не найден')

   return employee
}