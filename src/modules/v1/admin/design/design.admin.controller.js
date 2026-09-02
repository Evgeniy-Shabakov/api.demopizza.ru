import { designAdminService } from './design.admin.service.js'

export const designAdminController = {
   async list(request, reply) {
      const records = await designAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await designAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await designAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await designAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await designAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
