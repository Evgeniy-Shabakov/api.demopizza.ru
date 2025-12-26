import dotenv from 'dotenv'

dotenv.config()  // Загружаем переменные окружения из .env

export const users = [
   {
      phone: process.env.SUPER_ADMIN_PHONE,
      password: process.env.SUPER_ADMIN_PASSWORD_HASH
   }
]