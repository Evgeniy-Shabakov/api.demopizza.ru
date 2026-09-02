export const ORDER_STATUS = Object.freeze({
   CREATED: {
      ID: 1,
      NAME: 'создан'
   },

   ACCEPTED: {
      ID: 2,
      NAME: 'принят в работу'
   },

   COOKING: {
      ID: 3,
      NAME: 'готовится'
   },

   PACKING: {
      ID: 4,
      NAME: 'собирается'
   },

   WAITING_COURIER: {
      ID: 5,
      NAME: 'ожидает курьера'
   },

   IN_TRANSIT: {
      ID: 6,
      NAME: 'в пути'
   },

   AWAITING_PICKUP: {
      ID: 7,
      NAME: 'готов и ожидает выдачи'
   },

   COMPLETED: {
      ID: 8,
      NAME: 'завершен'
   },

   CANCEL: {
      ID: 9,
      NAME: 'отменен'
   }
})

export const ORDER_STATUS_NAME_BY_ID = Object.fromEntries(
  Object.values(ORDER_STATUS).map(s => [s.ID, s.NAME])
)
