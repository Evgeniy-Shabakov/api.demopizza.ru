import { prisma } from '#lib/prisma.js'

export async function promocodeAdminGetOneController(request, reply) {

   const record = await prisma.promocode.findUniqueOrThrow({
      where: { id: request.params.id },
      include: {
         user: { select: { phone: true } },
         employee: { select: { phone: true, firstName: true, lastName: true } }
      }
   })

   return { data: record }
}