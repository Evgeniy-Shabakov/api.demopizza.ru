import { productRestaurantAdminService } from './product-restaurant.admin.service.js'

export const productRestaurantAdminController = {
   async list(request, reply) {
      const records = await productRestaurantAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await productRestaurantAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await productRestaurantAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await productRestaurantAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await productRestaurantAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
