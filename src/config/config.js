import dotenv from 'dotenv'
import { parseJWTTimeToMs } from '#utils/api/v1/JWT/parseJWTTimeToMs .js'

dotenv.config()  // Загружаем переменные окружения из .env

const config = {
   adminPanelUrl: process.env.ADMIN_PANEL_URL,
   clientUrl: process.env.CLIENT_URL,

   authTelegramBotUsername: process.env.AUTH_TELEGRAM_BOT_USERNAME,
   authTelegramBotToken: process.env.AUTH_TELEGRAM_BOT_TOKEN,

   jwtEmployeesAccessTokenSecret: process.env.JWT_EMPLOYEES_ACCESS_TOKEN_SECRET,
   jwtEmployeesRefreshTokenSecret: process.env.JWT_EMPLOYEES_REFRESH_TOKEN_SECRET,
   jwtEmployeesAccessTokenLiveTime: process.env.JWT_EMPLOYEES_ACCESS_TOKEN_LIVE_TIME,
   jwtEmployeesRefreshTokenLiveTime: process.env.JWT_EMPLOYEES_REFRESH_TOKEN_LIVE_TIME,

   jwtEmployeesAccessTokenCookieOption: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: parseJWTTimeToMs(process.env.JWT_EMPLOYEES_ACCESS_TOKEN_LIVE_TIME),
      path: '/',
   },

   jwtEmployeesRefreshTokenCookieOption: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: parseJWTTimeToMs(process.env.JWT_EMPLOYEES_REFRESH_TOKEN_LIVE_TIME),
      path: '/api/v1/auth',
   },

   authTgBotCookieOption: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 300 * 1000, //как в nodeCashe
      path: '/api/v1/auth'
   }
}

export default config