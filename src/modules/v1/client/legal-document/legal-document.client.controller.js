import { legalDocumentClientService } from './legal-document.client.service.js'

export const legalDocumentClientController = {

   async list(request, reply) {
      const records = await legalDocumentClientService.list()
      return { data: records }
   },

   async getOne(request, reply) {
      const record = await legalDocumentClientService.getOne(request.params.id)
      return { data: record }
   }

}
