import { prisma } from '#lib/prisma.js'

export async function authClientMeController(request, reply) {

   const record = await prisma.user.findUnique({
      where: { id: request.user.id },
      include: {
         addresses: {
            include:
            {
               city: {
                  select: {
                     id: true,
                     name: true
                  }
               }
            }
         }
      }
   })

   return {
      data: record
   }
}