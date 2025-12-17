import dotenv from 'dotenv'

dotenv.config()  // Загружаем переменные окружения из .env

const config = {
   backendPort: process.env.BACKEND_PORT,
   adminPanelUrl: process.env.ADMIN_PANEL_URL,
   jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
   jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
   jwtAccessTokenLiveTime: process.env.JWT_ACCESS_TOKEN_LIVE_TIME,
   jwtRefreshTokenLiveTime: process.env.JWT_REFRESH_TOKEN_LIVE_TIME,
   authTelegramBotToken: process.env.AUTH_TELEGRAM_BOT_TOKEN
}

export default config