import { BaseResource } from "./BaseResource.js"
import { CountryResource } from "./CountryResource.js"

export class CityResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         countryId: record.countryId,
         minOrderValueForDeliveryByDefault: record.minOrderValueForDeliveryByDefault,
         deliveryPriceByDefault: record.deliveryPriceByDefault,
         orderValueForFreeDeliveryByDefault: record.orderValueForFreeDeliveryByDefault,
         mapIframe: record.mapIframe,
         geojson: record.geojson,

         country: record.country ? new CountryResource(record.country) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}