import { prisma } from '#lib/prisma.js'

export async function employeeAdminGetOneController(request, reply) {

   const record = await prisma.employee.findUniqueOrThrow({
      where: { id: request.params.id },
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

   return { data: record }
}