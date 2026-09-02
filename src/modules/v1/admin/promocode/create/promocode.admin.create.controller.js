import { prisma } from '#lib/prisma.js'

export async function promocodeAdminCreateController(request, reply) {

   const record = await prisma.promocode.create({
      data: {
         ...request.body,
         code: generatePromocode(),
         employeeId: request.user.id
      }
   })

   return reply.code(201).send({ data: record })
}

function generatePromocode(length = 8) {
   const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
   let promocode = ''

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      promocode += chars[randomIndex]
   }

   return promocode
}