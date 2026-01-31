import { BaseResource } from "./BaseResource.js"
import { AddressResource } from "./AddressResource.js"

export class UserResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         phone: record.phone,
         phoneVerifiedAt: record.phoneVerifiedAt,
         email: record.email,
         emailVerifiedAt: record.emailVerifiedAt,
         nickname: record.nickname,

         addresses: record.addresses ? AddressResource.collection(record.addresses) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}