import fp from 'fastify-plugin'
import fastifyJwt from '@fastify/jwt'
import { parse } from '@lukeed/ms'

export const authAdminConfig = fp((app) => {
   app.register(fastifyJwt, {
      secret: process.env.JWT_EMPLOYEES_ACCESS_TOKEN_SECRET,
      cookie: {
         cookieName: 'employeeAccessToken'
      },
      sign: {
         expiresIn: process.env.JWT_EMPLOYEES_ACCESS_TOKEN_LIVE_TIME
      },
      namespace: 'employeeAccess'
   })

   app.register(fastifyJwt, {
      secret: process.env.JWT_EMPLOYEES_REFRESH_TOKEN_SECRET,
      cookie: {
         cookieName: 'employeeRefreshToken'
      },
      sign: {
         expiresIn: process.env.JWT_EMPLOYEES_REFRESH_TOKEN_LIVE_TIME
      },
      namespace: 'employeeRefresh'
   })

   app.decorate('authenticateEmployee', async (request) => {
      await request.employeeAccessJwtVerify()
   })
})

export const jwtEmployeesAccessTokenCookieOption = {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   sameSite: 'strict',
   //время жизни рефреш токена, чтобы была ошибка FST_JWT_AUTHORIZATION_TOKEN_EXPIRED на клиенте
   maxAge: parse(process.env.JWT_EMPLOYEES_REFRESH_TOKEN_LIVE_TIME) / 1000, 
   path: '/api/v1/admin',
}

export const jwtEmployeesRefreshTokenCookieOption = {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   sameSite: 'strict',
   maxAge: parse(process.env.JWT_EMPLOYEES_REFRESH_TOKEN_LIVE_TIME) / 1000,
   path: '/api/v1/admin/auth',
}
