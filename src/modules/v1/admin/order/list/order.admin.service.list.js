import { prisma } from '#lib/prisma.js'

export async function orderAdminServiceList({ page = 1, perPage = 25, cityId, restaurantId }) {
   const where = {}
   if (cityId) where.cityId = cityId
   if (restaurantId) where.restaurantId = restaurantId 

   const [records, total] = await Promise.all([
      prisma.order.findMany({
         where,
         skip: (page - 1) * perPage,
         take: perPage,
         orderBy: { id: 'desc' },
         include: {
            city: { select: { name: true } },
            restaurant: { select: { name: true } },
            user: { select: { phone: true } }
         }
      }),
      prisma.order.count({ where })
   ])

   const totalPages = Math.ceil(total / perPage)

   return {
      records,
      pagination: {
         page,
         perPage,
         total,
         totalPages,
         hasNextPage: page < totalPages,
         hasPrevPage: page > 1
      }
   }
}