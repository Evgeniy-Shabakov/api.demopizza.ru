import { productAdminService } from './product.admin.service.js'

export const productAdminController = {
   async list(request, reply) {
      const records = await productAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await productAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await productAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await productAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await productAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
