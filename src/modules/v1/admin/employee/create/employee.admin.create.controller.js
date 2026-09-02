import bcrypt from 'bcrypt'
import { prisma } from '#lib/prisma.js'

export async function employeeAdminCreateController (request, reply)  {

   if (request.body.password) {
      const saltRounds = 10
      request.body.password = await bcrypt.hash(request.body.password, saltRounds)
   }

   const record = await prisma.employee.create({
      data: {
         ...request.body,
         employeeRoles: { create: request.body.employeeRoles }
      },
      include: {
         employeeRoles:
         {
            include: {
               role: true,
               restaurant: true
            }
         }
      }
   })

   return reply.code(201).send({ data: record })
}