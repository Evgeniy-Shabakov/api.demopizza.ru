import { BaseResource } from "./BaseResource.js"
import { ProductResource } from "./ProductResource.js"
import { RestaurantResource } from "./RestaurantResource.js"

export class ProductRestaurantResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         productId: record.productId,
         restaurantId: record.restaurantId,

         isInStopList: record.isInStopList,
        
         product: record.product ? new ProductResource(record.product) : undefined,
         restaurant: record.restaurant ? new RestaurantResource(record.restaurant) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}