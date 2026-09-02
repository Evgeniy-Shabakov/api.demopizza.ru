import { prisma } from '#lib/prisma.js'

export async function employeeAdminDeleteController(request, reply) {

   await prisma.employee.delete({
      where: { id: request.params.id }
   })

   return reply.code(204).send()
}