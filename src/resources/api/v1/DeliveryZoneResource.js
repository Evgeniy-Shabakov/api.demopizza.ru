import { BaseResource } from "./BaseResource.js"
import { CityResource } from "./CityResource.js"
import { RestaurantResource } from "./RestaurantResource.js"

export class DeliveryZoneResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         cityId: record.cityId,
         restaurantId: record.restaurantId,

         minOrderValueForDelivery: record.minOrderValueForDelivery,
         deliveryPrice: record.deliveryPrice,
         orderValueForFreeDelivery: record.orderValueForFreeDelivery,
         geojsonFeature: record.geojsonFeature,
         isActive: record.isActive,

         city: record.city ? new CityResource(record.city) : undefined,
         restaurant: record.restaurant ? new RestaurantResource(record.restaurant) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}