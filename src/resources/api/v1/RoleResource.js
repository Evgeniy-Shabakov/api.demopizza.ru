import { BaseResource } from "./BaseResource.js"

export class RoleResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         name: record.name,
         description: record.description,
         employeesControlLevel: record.employeesControlLevel,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}