import bcrypt from 'bcrypt'
import { prisma } from '#lib/prisma.js'

export async function employeeAdminUpdateController(request, reply) {

   if (request.body.password) {
      const saltRounds = 10
      request.body.password = await bcrypt.hash(request.body.password, saltRounds)
   }

   const record = await prisma.employee.update({
      where: { id: request.params.id },
      data: {
         ...request.body,
         employeeRoles: {
            deleteMany: {},
            create: request.body.employeeRoles
         }
      },
      include: {
         employeeRoles: {
            include: {
               role: true,
               restaurant: true
            }
         }
      }
   })

   return { data: record }
}