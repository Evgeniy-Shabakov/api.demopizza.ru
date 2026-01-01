import bcrypt from 'bcrypt'
import config from '#config/config.js'
import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/userResource.js"
import { generateJWTTokens } from '#utils/auth/generateJWTTokens.js'
import { nodeCache } from '#services/nodeCache.js'
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'

export const loginController = baseController(async (req, res) => {
   let user

   if (req.body) {
      user = await findOrFailUserWithRoles(req.body.phone)

      if (!user.password) throw new UnauthorizedError('Невозможен вход по паролю')

      const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
      
      if (!isPasswordValid) throw new UnauthorizedError('Неверный пароль')
   }
   else if(req.cookies.authTgBotLoginLink && req.cookies.authTgBotLoginSessionID){
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

      user = await findOrFailUserWithRoles(cacheData.phone)
   }
   else {
      throw new UnauthorizedError('Недостаточно данных для входа')
   }

   const { accessToken, refreshToken } = await generateJWTTokens(req, user)

   res.cookie('accessToken', accessToken, config.jwtAccessTokenCookieOption)
   res.cookie('refreshToken', refreshToken, config.jwtRefreshTokenCookieOption)

   res.json({
      data: {
         user: new UserResource(user)
      }
   })
})

async function findOrFailUserWithRoles(phone) {
   if (!phone.startsWith('+')) {
     phone = '+' + phone;
   }
   
   console.log(phone)
   
   let user = await prisma.user.findUnique({
      where: { phone: phone },
      include: { userRoles: { include: { role: true } } }
   })

   if (!user) throw new UnauthorizedError('Пользователь c таким номером телефона не найден')

   user = {
      ...user,
      roles: user.userRoles.map(item => {
         return {
            id: item.role.id,
            name: item.role.name,
            restaurantId: item.restaurantId
         }
      })
   }

   return user
}

// if (!user) {
//    user = await prisma.user.create({
//       data: { phone: phone }
//    })
// }