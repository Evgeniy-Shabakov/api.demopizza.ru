import { BaseResource } from "./BaseResource.js"

export class RestaurantScheduleResource extends BaseResource {
   transform(record) {
      return {
         id: record.id,
         name: record.name,

         mondayOpenTime: record.mondayOpenTime,
         mondayCloseTime: record.mondayCloseTime,
         mondayIsOpen: record.mondayIsOpen,

         tuesdayOpenTime: record.tuesdayOpenTime,
         tuesdayCloseTime: record.tuesdayCloseTime,
         tuesdayIsOpen: record.tuesdayIsOpen,

         wednesdayOpenTime: record.wednesdayOpenTime,
         wednesdayCloseTime: record.wednesdayCloseTime,
         wednesdayIsOpen: record.wednesdayIsOpen,

         thursdayOpenTime: record.thursdayOpenTime,
         thursdayCloseTime: record.thursdayCloseTime,
         thursdayIsOpen: record.thursdayIsOpen,

         fridayOpenTime: record.fridayOpenTime,
         fridayCloseTime: record.fridayCloseTime,
         fridayIsOpen: record.fridayIsOpen,

         saturdayOpenTime: record.saturdayOpenTime,
         saturdayCloseTime: record.saturdayCloseTime,
         saturdayIsOpen: record.saturdayIsOpen,

         sundayOpenTime: record.sundayOpenTime,
         sundayCloseTime: record.sundayCloseTime,
         sundayIsOpen: record.sundayIsOpen,

         createdAt: this.formatDate(record.createdAt),
         updatedAt: this.formatDate(record.updatedAt)
      }
   }
}