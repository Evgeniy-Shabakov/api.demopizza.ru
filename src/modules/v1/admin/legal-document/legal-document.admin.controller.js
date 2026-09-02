import { legalDocumentAdminService } from './legal-document.admin.service.js'

export const legalDocumentAdminController = {
   async list(request, reply) {
      const records = await legalDocumentAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await legalDocumentAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await legalDocumentAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await legalDocumentAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await legalDocumentAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
