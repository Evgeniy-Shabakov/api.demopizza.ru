import { BaseResource } from "./BaseResource.js"
import { OrderProductResource } from "./OrderProductResource.js"
import { UserResource } from "./UserResource.js"
import { CityResource } from "./CityResource.js"
import { DeliveryZoneResource } from "./DeliveryZoneResource.js"
import { RestaurantResource } from "./RestaurantResource.js"
import { EmployeeResource } from "./EmployeeResource.js"
import { AddressResource } from "./AddressResource.js"


export class OrderResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,

         number: record.number,

         userId: record.userId,
         cityId: record.cityId,
         deliveryZoneId: record.deliveryZoneId,
         restaurantId: record.restaurantId,
         responsibleEmployeeId: record.responsibleEmployeeId,
         courierId: record.courierId,
         userAddressId: record.userAddressId,

         orderType: record.orderType,
         tableNumber: record.tableNumber,
         carNumber: record.carNumber,
         packTakeaway: record.packTakeaway,
         leaveAtTheDoor: record.leaveAtTheDoor,
         dontRingDoorbell: record.dontRingDoorbell,

         orderStatus: record.orderStatus,

         totalProductsPrice: record.totalProductsPrice,
         deliveryPrice: record.deliveryPrice,
         bonusCoinsPaid: record.bonusCoinsPaid,
         totalPrice: record.totalPrice,

         bonusCoinsEarned: record.bonusCoinsEarned,

         paymentType: record.paymentType,
         banknoteForChange: record.banknoteForChange,
         paymentStatus: record.paymentStatus,

         userComment: record.userComment,
         responsibleEmployeeComment: record.responsibleEmployeeComment,

         options: record.options,
         snapshot: record.snapshot,

         user: record.user ? new UserResource(record.user) : undefined,
         city: record.city ? new CityResource(record.city) : undefined,
         deliveryZone: record.deliveryZone ? new DeliveryZoneResource(record.deliveryZone) : undefined,
         restaurant: record.restaurant ? new RestaurantResource(record.restaurant) : undefined,
         responsibleEmployee: record.responsibleEmployee ? new EmployeeResource(record.responsibleEmployee) : undefined,
         courier: record.courier ? new EmployeeResource(record.courier) : undefined,
         userAddress: record.userAddress ? new AddressResource(record.userAddress) : undefined,

         orderProducts: record.orderProducts ?
            OrderProductResource.collection(record.orderProducts) :
            undefined,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}