import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { RestaurantScheduleResource } from "#resources/api/v1/restaurantScheduleResource.js"

export const restaurantScheduleStoreController = baseController(async (req, res) => {  
   
   const record = await prisma.restaurantSchedule.create({
      data: req.body
   })

   res.status(201).json(new RestaurantScheduleResource(record, {}))
})