import { prisma } from '#lib/prisma.js'

export const restaurantScheduleAdminService = {
   list() {
      return prisma.restaurantSchedule.findMany({
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.restaurantSchedule.findUniqueOrThrow({ where: { id } })
   },

   create(data) {
      return prisma.restaurantSchedule.create({ data })
   },

   update(id, data) {
      return prisma.restaurantSchedule.update({ where: { id }, data })
   },

   delete(id) {
      return prisma.restaurantSchedule.delete({ where: { id } })
   }
}
