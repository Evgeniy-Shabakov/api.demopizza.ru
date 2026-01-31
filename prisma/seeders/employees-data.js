import dotenv from 'dotenv'

dotenv.config()  // Загружаем переменные окружения из .env

export const employees = [
   {
      id: parseInt(process.env.SUPER_ADMIN_ID),
      phone: process.env.SUPER_ADMIN_PHONE,
      password: process.env.SUPER_ADMIN_PASSWORD_HASH
   }
]