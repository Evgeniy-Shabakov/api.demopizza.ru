import { BaseResource } from "./BaseResource.js"
import { CityResource } from "./CityResource.js"
import { UserResource } from "./UserResource.js"
import { RestaurantResource } from "./RestaurantResource.js"

export class AddressResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         userId: record.userId,
         restaurantId: record.restaurantId,
         cityId: record.cityId,

         street: record.street,
         house: record.house,
         corps: record.corps,
         flat: record.flat,
         entrance: record.entrance,
         floor: record.floor,
         entranceCode: record.entranceCode,
         comment: record.comment,

         latitude: record.latitude,
         longitude: record.longitude,
         addressAsString: record.addressAsString,
         externalApiData: record.externalApiData,
         
         city: record.city ? new CityResource(record.city) : undefined,
         user: record.user ? new UserResource(record.user) : undefined,
         city: record.restaurant ? new RestaurantResource(record.restaurant) : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}