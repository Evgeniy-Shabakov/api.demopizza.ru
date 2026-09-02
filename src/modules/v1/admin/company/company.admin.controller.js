import { companyAdminService } from './company.admin.service.js'

export const companyAdminController = {

   async get(request, reply) {
      const record = await companyAdminService.get()
      return { data: record }
   },

   async update(request, reply) {
      const record = await companyAdminService.update(request.body)
      return { data: record }
   }
   
}
