import { companyClientService } from './company.client.service.js'

export const companyClientController = {
   async get(request, reply) {
      const record = await companyClientService.get()
      return { data: record }
   },
}
