import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { ORDER_STATUS } from '#constants/api/v1/dataTypes/orderStatus.js'

export const orderActiveCountController = baseController(async (req, res) => {

   const where = {
      orderStatus: { notIn: [ORDER_STATUS.COMPLETED, ORDER_STATUS.CANCEL] }
   }

   const appliedFilters = {}

   if (req.query.restaurantId) {
      where.restaurantId = parseInt(req.query.restaurantId)
      appliedFilters.restaurantId = parseInt(req.query.restaurantId)
   }

   const count = await prisma.order.count({ where })

   const meta = {
      filters: appliedFilters
   }

   res.status(200).json({ meta, data: count })
})
