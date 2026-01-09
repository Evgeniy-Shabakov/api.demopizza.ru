import dotenv from 'dotenv'
import { parseJWTTimeToMs } from '#utils/auth/parseJWTTimeToMs .js'

dotenv.config()  // Загружаем переменные окружения из .env

const config = {
   backendPort: process.env.BACKEND_PORT,
   adminPanelUrl: process.env.ADMIN_PANEL_URL,
   adminPanelLocalDevUrl: process.env.ADMIN_PANEL_LOCAL_DEV_URL,
   clientUrl: process.env.CLIENT_URL,

   authTelegramBotUsername: process.env.AUTH_TELEGRAM_BOT_USERNAME,
   authTelegramBotToken: process.env.AUTH_TELEGRAM_BOT_TOKEN,

   jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
   jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
   jwtAccessTokenLiveTime: process.env.JWT_ACCESS_TOKEN_LIVE_TIME,
   jwtRefreshTokenLiveTime: process.env.JWT_REFRESH_TOKEN_LIVE_TIME,

   jwtAccessTokenCookieOption: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: parseJWTTimeToMs(process.env.JWT_ACCESS_TOKEN_LIVE_TIME),
      path: '/',
   },

   jwtRefreshTokenCookieOption: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: parseJWTTimeToMs(process.env.JWT_REFRESH_TOKEN_LIVE_TIME),
      path: '/api/v1/auth',
   },

   authTgBotCookieOption: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 300 * 1000, //как в nodeCashe
      path: '/api/v1/auth',
   }
}

export default config