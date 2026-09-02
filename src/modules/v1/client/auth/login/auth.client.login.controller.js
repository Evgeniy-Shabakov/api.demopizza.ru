import axios from 'axios'
import { prisma } from '#lib/prisma.js'
import { clientGenerateJwtTokens } from '../auth.client.generate-jwt.js'
import { jwtUserAccessTokenCookieOption, jwtUserRefreshTokenCookieOption }
   from '../auth.client.config.js'
import { ErrorUnauthorized } from '#errors/v1/types/error.unauthorized.js'

export async function authClientLoginController(request, reply) {

   let vkResponse

   try {
      vkResponse = await axios.post('https://id.vk.ru/oauth2/user_info',
         {
            client_id: process.env.AUTH_VK_APP_ID,
            access_token: request.body.vkidAccessToken
         },
         { timeout: 5000 })
   }
   catch {
      throw new ErrorUnauthorized('Ошибка проверки токена ВК')
   }

   if (!vkResponse.data.user || !vkResponse.data.user.phone)
      throw new ErrorUnauthorized('Номер телефона не определен')

   const user = await findOrCreateUser(vkResponse.data.user.phone)

   const { accessToken, refreshToken } = await clientGenerateJwtTokens(request, user)

   reply.setCookie('userAccessToken', accessToken, jwtUserAccessTokenCookieOption)
   reply.setCookie('userRefreshToken', refreshToken, jwtUserRefreshTokenCookieOption)

   return {
      data: user
   }

}

async function findOrCreateUser(phone) {
   if (!phone.startsWith('+')) {
      phone = '+' + phone
   }

   const user = await prisma.user.upsert({ // upsert гарантирует атомарность
      where: { phone },
      update: {},        // если пользователь уже есть – ничего не меняем
      create: { phone }  // если нет – создаём
   })

   return user
}