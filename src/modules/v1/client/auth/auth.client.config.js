import fp from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt'
import { parse } from '@lukeed/ms'

export const authClientConfig = fp((app) => {
   app.register(fastifyJwt, {
      secret: process.env.JWT_USERS_ACCESS_TOKEN_SECRET,
      cookie: {
         cookieName: 'userAccessToken'
      },
      sign: {
         expiresIn: process.env.JWT_USERS_ACCESS_TOKEN_LIVE_TIME
      },
      namespace: 'userAccess'
   })

   app.register(fastifyJwt, {
      secret: process.env.JWT_USERS_REFRESH_TOKEN_SECRET,
      cookie: {
         cookieName: 'userRefreshToken'
      },
      sign: {
         expiresIn: process.env.JWT_USERS_REFRESH_TOKEN_LIVE_TIME
      },
      namespace: 'userRefresh'
   })

   app.decorate('authenticateUser', async (request) => {
      await request.userAccessJwtVerify()
   })
})

export const jwtUserAccessTokenCookieOption = {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   sameSite: 'strict',
   //время жизни рефреш токена, чтобы была ошибка FST_JWT_AUTHORIZATION_TOKEN_EXPIRED на клиенте
   maxAge: parse(process.env.JWT_USERS_REFRESH_TOKEN_LIVE_TIME) / 1000,
   path: '/api/v1',
}

export const jwtUserRefreshTokenCookieOption = {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   sameSite: 'strict',
   maxAge: parse(process.env.JWT_USERS_REFRESH_TOKEN_LIVE_TIME) / 1000,
   path: '/api/v1/auth',
}
