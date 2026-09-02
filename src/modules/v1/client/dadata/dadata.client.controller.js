import { dadataClientService } from './dadata.client.service.js'

export const dadataClientController = {
   async suggestions(request, reply) {
      const records = await dadataClientService.suggestions(request.body.query)
      return { data: records }
   },
}
