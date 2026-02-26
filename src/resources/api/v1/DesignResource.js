import { BaseResource } from "./BaseResource.js"

export class DesignResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,
         isActive: record.isActive,
         
         settings: record.settings,
         
         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}