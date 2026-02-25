import { BaseResource } from "./BaseResource.js"
import { ProductResource } from "./ProductResource.js"

export class OrderProductResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         orderId: record.orderId,
         productId: record.productId,

         quantity: record.quantity,
         price: record.price,

         product: record.product ? new ProductResource(record.product) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}