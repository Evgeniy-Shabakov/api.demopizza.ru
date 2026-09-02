import { prisma } from '#lib/prisma.js'

export function orderAdminServiceCount() {

   return prisma.order.count()
   
}