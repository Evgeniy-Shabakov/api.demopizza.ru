import { prisma } from '#lib/prisma.js'

export async function addressClientCreateService({ userId, data }) {
   return prisma.address.create({
      data: {
         ...data,
         userId
      },
      include: {
         city: {
            select: {
               id: true,
               name: true
            }
         }
      }
   })
}