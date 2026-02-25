import { ORDER_STATUS } from "./orderStatus.js"

export const ORDER_TYPE = Object.freeze({
   DELIVERY_TO_ADDRESS: {
      ID: 1,
      NAME: 'доставка до адреса',
      ORDER_NUMBER_PREFIX: 'Д',
      STATUSES: [
         ORDER_STATUS.CREATED,
         ORDER_STATUS.ACCEPTED,
         ORDER_STATUS.COOKING,
         ORDER_STATUS.PACKING,
         ORDER_STATUS.WAITING_COURIER,
         ORDER_STATUS.IN_TRANSIT,
         ORDER_STATUS.COMPLETED
      ]
   },

   PICK_UP_AT_COUNTER: {
      ID: 2,
      NAME: 'самовывоз (выдача у бара)',
      ORDER_NUMBER_PREFIX: 'С',
      STATUSES: [
         ORDER_STATUS.CREATED,
         ORDER_STATUS.ACCEPTED,
         ORDER_STATUS.COOKING,
         ORDER_STATUS.PACKING,
         ORDER_STATUS.AWAITING_PICKUP,
         ORDER_STATUS.COMPLETED
      ]
   },

   PICK_UP_AT_CAR_WINDOW: {
      ID: 3,
      NAME: 'самовывоз (выдача в окне для авто)',
      ORDER_NUMBER_PREFIX: 'СА',
      STATUSES: [
         ORDER_STATUS.CREATED,
         ORDER_STATUS.ACCEPTED,
         ORDER_STATUS.COOKING,
         ORDER_STATUS.PACKING,
         ORDER_STATUS.AWAITING_PICKUP,
         ORDER_STATUS.COMPLETED
      ]
   },

   AT_RESTAURANT_AT_COUNTER: {
      ID: 4,
      NAME: 'в ресторане (выдача у бара)',
      ORDER_NUMBER_PREFIX: 'РБ',
      STATUSES: [
         ORDER_STATUS.CREATED,
         ORDER_STATUS.ACCEPTED,
         ORDER_STATUS.COOKING,
         ORDER_STATUS.PACKING,
         ORDER_STATUS.AWAITING_PICKUP,
         ORDER_STATUS.COMPLETED
      ]
   },

   AT_RESTAURANT_TO_TABLE: {
      ID: 5,
      NAME: 'в ресторане (к столику)',
      ORDER_NUMBER_PREFIX: 'РТ',
      STATUSES: [
         ORDER_STATUS.CREATED,
         ORDER_STATUS.ACCEPTED,
         ORDER_STATUS.COOKING,
         ORDER_STATUS.PACKING,
         ORDER_STATUS.COMPLETED
      ]
   },

   DELIVERY_TO_RESTAURANT_PARKING: {
      ID: 6,
      NAME: 'доставка на парковку у ресторана (к машине)',
      ORDER_NUMBER_PREFIX: 'ДА',
      STATUSES: [
         ORDER_STATUS.CREATED,
         ORDER_STATUS.ACCEPTED,
         ORDER_STATUS.COOKING,
         ORDER_STATUS.PACKING,
         ORDER_STATUS.IN_TRANSIT,
         ORDER_STATUS.COMPLETED
      ]
   }
})