import { restaurantClientService } from './restaurant.client.service.js'

export const restaurantClientController = {
   async list(request, reply) {
      const records = await restaurantClientService.list()
      return { data: records }
   },
}
