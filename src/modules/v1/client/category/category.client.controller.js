import { categoryClientService } from './category.client.service.js'

export const categoryClientController = {
   async list(request, reply) {
      const records = await categoryClientService.list()
      return { data: records }
   },
}
