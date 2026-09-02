import { designClientService } from './design.client.service.js'

export const designClientController = {

   async getActive(request, reply) {
      const record = await designClientService.getActive()
      return { data: record }
   }

}
