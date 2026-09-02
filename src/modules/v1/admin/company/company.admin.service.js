import { prisma } from '#lib/prisma.js'

export const companyAdminService = {
   
   get() {
      return prisma.company.findFirstOrThrow()
   },

   update(data) {
      return prisma.company.update({
         where: {
            id: 1
         },
         data: data
      })
   }
   
}
