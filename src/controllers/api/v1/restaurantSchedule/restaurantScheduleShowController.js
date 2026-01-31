import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { RestaurantScheduleResource } from "#resources/api/v1/RestaurantScheduleResource.js"

export const restaurantScheduleShowController = baseController(async (req, res) => {

   const record = await prisma.restaurantSchedule.findUniqueOrThrow({
      where: { id: req.params.id },
      include: req.relations
   })

   res.status(200).json(new RestaurantScheduleResource(record, {}))
})