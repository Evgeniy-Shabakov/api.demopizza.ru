export const PAYMENT_STATUS = Object.freeze({
   NO_PAID: {
      ID: 1,
      NAME: 'Не оплачено'
   },
   PENDING: {
      ID: 2,
      NAME: 'В ожидании'
   },
   PAID: {
      ID: 3,
      NAME: 'Оплачено'
   },
   CANCELLED: {
      ID: 4,
      NAME: 'Отменен'
   },
   FAILED: {
      ID: 5,
      NAME: 'Ошибка оплаты'
   }
})

export const PAYMENT_STATUS_NAME_BY_ID = Object.fromEntries(
  Object.values(PAYMENT_STATUS).map(s => [s.ID, s.NAME])
)