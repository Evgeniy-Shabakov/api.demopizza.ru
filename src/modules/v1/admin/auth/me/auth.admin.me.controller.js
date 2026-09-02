import { prisma } from '#lib/prisma.js'

export async function authAdminMeController(request, reply) {
   
   const record = await prisma.employee.findUnique({
      where: { id: request.user.id },
      include: { employeeRoles: true }
   })

   return {
      data: record
   }
}