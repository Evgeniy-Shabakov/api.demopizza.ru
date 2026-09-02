import { countryAdminService } from './country.admin.service.js'

export const countryAdminController = {

   async list(request, reply) {
      const records = await countryAdminService.list()
      return { data: records }
   },

   async getOne(request, reply) {
      const record = await countryAdminService.getOne(request.params.id)
      return { data: record }
   },

   async create(request, reply) {
      const record = await countryAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },

   async update(request, reply) {
      const record = await countryAdminService.update(request.params.id, request.body)
      return { data: record }
   },

   async delete(request, reply) {
      await countryAdminService.delete(request.params.id)
      return reply.code(204).send()
   },
   
}
