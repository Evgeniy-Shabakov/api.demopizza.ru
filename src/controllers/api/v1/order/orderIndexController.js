import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { OrderResource } from "#resources/api/v1/OrderResource.js"
import { ORDER_STATUS } from '#constants/api/v1/dataTypes/orderStatus.js'

export const orderIndexController = baseController(async (req, res) => {

   const page = parseInt(req.query.page) || 1
   const perPage = parseInt(req.query.perPage) || 10
   const skip = (page - 1) * perPage

   let where = {}
   const appliedFilters = {}

   if (req.query.active === 'true') {
      where.orderStatus = { notIn: [ORDER_STATUS.COMPLETED, ORDER_STATUS.CANCEL] }
      appliedFilters.active = true
   }
   if (req.query.active === 'false') {
      where.orderStatus = { in: [ORDER_STATUS.COMPLETED, ORDER_STATUS.CANCEL] }
      appliedFilters.active = false
   }
   if (req.query.restaurantId) {
      where.restaurantId = parseInt(req.query.restaurantId)
      appliedFilters.restaurantId = parseInt(req.query.restaurantId)
   }
   if (req.query.cityId) {
      where.cityId = parseInt(req.query.cityId)
      appliedFilters.cityId = parseInt(req.query.cityId)
   }

   let records = await prisma.order.findMany({
      where,
      include: {
         orderProducts: {
            include: {
               product: true
            }
         }
      },
      orderBy: req.sort,
      skip: skip,
      take: perPage
   })

   const total = await prisma.order.count({ where })

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

   res.status(200).json(OrderResource.collection(records, meta))
})