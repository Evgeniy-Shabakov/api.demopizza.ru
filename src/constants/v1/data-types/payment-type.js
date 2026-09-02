export const PAYMENT_TYPE = Object.freeze({
   CASH: {
      ID: 1,
      NAME: 'Наличными'
   },
   CARD_OFFLINE: {
      ID: 2,
      NAME: 'Картой при получении'
   },
   ONLINE: {
      ID: 3,
      NAME: 'Онлайн'
   },
   QR_CODE_OFFLINE: {
      ID: 4,
      NAME: 'По QR-коду при получении'
   }
})

export const PAYMENT_TYPE_NAME_BY_ID = Object.fromEntries(
  Object.values(PAYMENT_TYPE).map(s => [s.ID, s.NAME])
)