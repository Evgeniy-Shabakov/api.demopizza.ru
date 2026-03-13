import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { PromocodeResource } from "#resources/api/v1/PromocodeResource.js"

export const promocodeIndexController = baseController(async (req, res) => {

   const page = parseInt(req.query.page) || 1
   const perPage = parseInt(req.query.perPage) || 10
   const skip = (page - 1) * perPage

   let where = {}
   const appliedFilters = {}

   if (req.query.isActive === 'true') {
      where.isActive = true
      appliedFilters.isActive = true
   }
   if (req.query.isActive === 'false') {
      where.isActive = false
      appliedFilters.isActive = false
   }

   if (req.query.usedAt === 'true') {
      where.usedAt = { not: null }
      appliedFilters.usedAt = true
   }
   if (req.query.usedAt === 'false') {
      where.usedAt = null
      appliedFilters.usedAt = false
   }

   let records = await prisma.promocode.findMany({
      where,
      orderBy: req.sort,
      skip: skip,
      take: perPage
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

   const meta = {
      pagination,
      filters: appliedFilters
   }

   res.status(200).json(PromocodeResource.collection(records, meta))
})