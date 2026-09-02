import { prisma } from '#lib/prisma.js'

export const designClientService = {
   getActive() {
      return prisma.design.findFirstOrThrow({
         where: {
            isActive: true
         }
      })
   }
}
