import { restaurantAdminService } from './restaurant.admin.service.js'

export const restaurantAdminController = {
   async list(request, reply) {
      const records = await restaurantAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await restaurantAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await restaurantAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await restaurantAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await restaurantAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
