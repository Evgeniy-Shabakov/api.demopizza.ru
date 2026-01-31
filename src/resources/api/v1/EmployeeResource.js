import { BaseResource } from "./BaseResource.js"
import { EmployeeRoleResource } from "./EmployeeRoleResource.js"

export class EmployeeResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         phone: record.phone,
         phoneVerifiedAt: record.phoneVerifiedAt,
         email: record.email,
         emailVerifiedAt: record.emailVerifiedAt,
         firstName: record.firstName,
         lastName: record.lastName,
         middleName: record.middleName,
         jobTitle: record.jobTitle,

         employeeRoles: record.employeeRoles ?
            EmployeeRoleResource.collection(record.employeeRoles) :
            undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}