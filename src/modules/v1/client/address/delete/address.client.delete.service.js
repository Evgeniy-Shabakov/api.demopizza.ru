import { prisma } from '#lib/prisma.js'

export async function addressClientDeleteService({ userId, id }) {
   return prisma.address.deleteMany({
      where: {
         id,
         userId
      }
   })
}