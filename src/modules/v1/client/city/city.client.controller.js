import { cityClientService } from './city.client.service.js'

export const cityClientController = {
   async list(request, reply) {
      const records = await cityClientService.list()
      return { data: records }
   },
}
