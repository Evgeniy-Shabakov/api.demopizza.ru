import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const productRestaurantStopListCountController = baseController(async (req, res) => {

   const where = {
      isInStopList: true,
   }

   const appliedFilters = {}

   if (req.query.restaurantId) {
      where.restaurantId = parseInt(req.query.restaurantId)
      appliedFilters.restaurantId = parseInt(req.query.restaurantId)
   }

   const count = await prisma.productRestaurant.count({ where })

   const meta = {
      filters: appliedFilters
   }

   res.status(200).json({ meta, data: count })
})
