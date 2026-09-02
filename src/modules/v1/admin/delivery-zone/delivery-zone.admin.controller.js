import { deliveryZoneAdminService } from './delivery-zone.admin.service.js'

export const deliveryZoneAdminController = {
   async list(request, reply) {
      const records = await deliveryZoneAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await deliveryZoneAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await deliveryZoneAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await deliveryZoneAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await deliveryZoneAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
