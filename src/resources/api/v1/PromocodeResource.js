import { BaseResource } from "./BaseResource.js"
import { UserResource } from "./UserResource.js"
import { EmployeeResource } from "./EmployeeResource.js"

export class PromocodeResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         code: record.code,

         description: record.description,
         bonusCoins: record.bonusCoins,
         isActive: record.isActive,

         employeeId: record.employeeId,

         userId: record.userId,
         usedAt: record.usedAt,
         
         employee: record.employee ? new EmployeeResource(record.employee) : undefined,
         user: record.user ? new UserResource(record.user) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}