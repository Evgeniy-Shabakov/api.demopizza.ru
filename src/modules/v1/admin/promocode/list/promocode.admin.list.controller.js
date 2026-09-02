import { prisma } from '#lib/prisma.js'

export async function promocodeAdminListController(request, reply) {

   const page = parseInt(request.query.page) || 1
   const perPage = parseInt(request.query.perPage) || 10
   const skip = (page - 1) * perPage

   let where = {}
   const appliedFilters = {}

   if (request.query.isActive === 'true') {
      where.isActive = true
      appliedFilters.isActive = true
   }
   if (request.query.isActive === 'false') {
      where.isActive = false
      appliedFilters.isActive = false
   }

   if (request.query.usedAt === 'true') {
      where.usedAt = { not: null }
      appliedFilters.usedAt = true
   }
   if (request.query.usedAt === 'false') {
      where.usedAt = null
      appliedFilters.usedAt = false
   }

   let records = await prisma.promocode.findMany({
      where,
      include: {
         user: { select: { phone: true } },
         employee: { select: { phone: true, firstName: true, lastName: true } },
      },
      orderBy: { id: 'desc' },
      skip: skip,
      take: perPage,

   })

   const total = await prisma.promocode.count({ where })

   const pagination = {
      page,
      perPage,
      total,
      totalPages: Math.ceil(total / perPage),
      hasNextPage: page < Math.ceil(total / perPage),
      hasPrevPage: page > 1
   }

   return {
      data: records,
      meta: {
         pagination,
         filter: appliedFilters
      }
   }
}