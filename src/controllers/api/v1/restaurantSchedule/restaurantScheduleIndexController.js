import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { RestaurantScheduleResource } from "#resources/api/v1/restaurantScheduleResource.js"


export const restaurantScheduleIndexController = baseController(async (req, res) => {

   const records = await prisma.restaurantSchedule.findMany({
      include: req.relations,
      orderBy: req.sort
   })

   res.status(200).json(RestaurantScheduleResource.collection(records, {}))
})
