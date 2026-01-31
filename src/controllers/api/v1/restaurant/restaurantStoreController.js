import { prisma } from "#services/prismaClient.js"
import { baseController } from "#controllers/api/v1/baseController.js"
import { RestaurantResource } from "#resources/api/v1/RestaurantResource.js"

export const restaurantStoreController = baseController(async (req, res) => {
   const address = {
      street: req.body.street,
      house: req.body.house,
      addressAsString: req.body.addressAsString,
   }

   delete req.body.street
   delete req.body.house
   delete req.body.addressAsString

   const record = await prisma.$transaction(async (tx) => {
      const restaurant = await tx.restaurant.create({
         data: req.body
      })

      await tx.address.create({
         data: {
            cityId: req.body.cityId,
            restaurantId: restaurant.id,
            ...address,
         },
      })

      return restaurant
   })

   res.status(201).json(new RestaurantResource(record, {}))
})