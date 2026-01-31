import { AddressResource } from "./AddressResource.js"
import { BaseResource } from "./BaseResource.js"
import { CityResource } from "./CityResource.js"
import { RestaurantScheduleResource } from "./RestaurantScheduleResource.js"

export class RestaurantResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         cityId: record.cityId,
         restaurantScheduleId: record.restaurantScheduleId,

         deliveryToAddressAvailable: record.deliveryToAddressAvailable,
         pickUpAtCounterAvailable: record.pickUpAtCounterAvailable,
         pickUpAtCarWindowAvailable: record.pickUpAtCarWindowAvailable,
         atRestaurantAtCounterAvailable: record.atRestaurantAtCounterAvailable,
         atRestaurantToTableAvailable: record.atRestaurantToTableAvailable,
         deliveryToRestaurantParkingAvailable: record.deliveryToRestaurantParkingAvailable,
         isActive: record.isActive,

         city: record.city ? new CityResource(record.city) : undefined,
         restaurantSchedule: record.restaurantSchedule ? new RestaurantScheduleResource(record.restaurantSchedule) : undefined,

         address: record.address ? new AddressResource(record.address) : undefined,
         street: record.address ? record.address.street : undefined,
         house: record.address ? record.address.house : undefined,
         addressAsString: record.address ? record.address.addressAsString : undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}