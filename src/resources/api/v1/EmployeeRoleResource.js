import { BaseResource } from "./BaseResource.js"
import { EmployeeResource } from "./EmployeeResource.js"
import { RestaurantResource } from "./RestaurantResource.js"
import { RoleResource } from "./RoleResource.js"

export class EmployeeRoleResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         employeeId: record.employeeId,
         roleId: record.roleId,
         restaurantId: record.restaurantId,
        
         employee: record.employee ? new EmployeeResource(record.employee) : undefined,
         role: record.role ? new RoleResource(record.role) : undefined,
         restaurant: record.restaurant ? new RestaurantResource(record.restaurant) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}