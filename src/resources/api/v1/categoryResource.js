import { BaseResource } from "./baseResource.js"
import { ProductResource } from "#resources/api/v1/productResource.js"

export class CategoryResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         position: record.position,

         products: record.products ? ProductResource.collection(record.products) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}