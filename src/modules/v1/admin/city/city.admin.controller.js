import { cityAdminService } from './city.admin.service.js'

export const cityAdminController = {
   async list(request, reply) {
      const records = await cityAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await cityAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await cityAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await cityAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await cityAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
