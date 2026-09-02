import { categoryAdminService } from './category.admin.service.js'

export const categoryAdminController = {
   async list(request, reply) {
      const records = await categoryAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await categoryAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await categoryAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await categoryAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await categoryAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
