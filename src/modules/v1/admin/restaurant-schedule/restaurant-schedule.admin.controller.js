import { restaurantScheduleAdminService } from './restaurant-schedule.admin.service.js'

export const restaurantScheduleAdminController = {
   async list(request, reply) {
      const records = await restaurantScheduleAdminService.list()
      return { data: records }
   },
   async getOne(request, reply) {
      const record = await restaurantScheduleAdminService.getOne(request.params.id)
      return { data: record }
   },
   async create(request, reply) {
      const record = await restaurantScheduleAdminService.create(request.body)
      return reply.code(201).send({ data: record })
   },
   async update(request, reply) {
      const record = await restaurantScheduleAdminService.update(request.params.id, request.body)
      return { data: record }
   },
   async delete(request, reply) {
      await restaurantScheduleAdminService.delete(request.params.id)
      return reply.code(204).send()
   }
}
