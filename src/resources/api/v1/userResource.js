import { BaseResource } from "./baseResource.js"
import { AddressResource } from "./addressResource.js"

export class UserResource extends BaseResource {
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
         nickname: record.nickname,
         job: record.job,

         addresses: record.addresses ? AddressResource.collection(record.addresses) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}