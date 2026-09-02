import bcrypt from 'bcrypt'
import { prisma } from '#lib/prisma.js'

export async function employeeAdminChangePasswordController(request, reply) {

   if (request.user.id != request.params.id) throw new Error('Можно изменить только свой пароль')

   const employee = await prisma.employee.findUnique({
      where: { id: request.user.id }
   })

   if (!employee) throw new Error('Сотрудник не найден')

   const isPasswordValid = await bcrypt.compare(request.body.password, employee.password)

   if (!isPasswordValid) throw new Error('Неверный пароль')

   const newPassword = await bcrypt.hash(request.body.newPassword, 10)

   await prisma.employee.update({
      where: { id: request.user.id },
      data: {
         password: newPassword
      }
   })

   return reply.code(204).send()
}