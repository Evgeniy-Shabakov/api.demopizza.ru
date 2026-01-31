import dotenv from 'dotenv'

dotenv.config()  // Загружаем переменные окружения из .env

export const employeeRoles = [
   {
      employeeId: parseInt(process.env.SUPER_ADMIN_ID),
      roleId: parseInt(process.env.ROLE_SUPER_ADMIN_ID)
   }
]