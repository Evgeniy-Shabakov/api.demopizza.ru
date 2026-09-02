import { prisma } from '#lib/prisma.js'

export const companyClientService = {
   get() {
      return prisma.company.findFirstOrThrow()
   }
}
