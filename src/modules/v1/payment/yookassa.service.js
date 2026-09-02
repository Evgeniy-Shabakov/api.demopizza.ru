import axios from 'axios'
import { randomUUID } from 'node:crypto'

export const YOOKASSA_IP_ALLOWED = [
   '185.71.76.0/27',
   '185.71.77.0/27',
   '77.75.153.0/25',
   '77.75.156.11',
   '77.75.156.35',
   '77.75.154.128/25',
   '2a02:5180::/32'
]

export const YOOKASSA_PAYMENT_STATUS_TYPE = Object.freeze({
   PENDING: 'pending',
   SUCCEEDED: 'succeeded',
   CANCELLED: 'canceled'
})

export async function yookassaCreatePayment({ value, description, returnUrl }) {
   const url = `${process.env.YOOKASSA_URL}/payments`
   const idempotenceKey = randomUUID()
   const authString = Buffer.from(`${process.env.YOOKASSA_SHOP_ID}:${process.env.YOOKASSA_SECRET_KEY}`).toString('base64')

   try {
      const response = await axios.post(url,
         {
            amount: {
               value: value,
               currency: "RUB"
            },
            confirmation: {
               type: "redirect",
               return_url: returnUrl
            },
            capture: true,   //деньги сразу после оплаты без ожидания подтверждения
            description: description
         },
         {
            headers: {
               'Content-Type': 'application/json',
               'Idempotence-Key': idempotenceKey,
               'Authorization': `Basic ${authString}`
            }
         })

      return response.data
   }
   catch (error) {
      if (axios.isAxiosError(error) && error.response) {
         throw new Error(`Ошибка ЮKassa: ${error.response.status} - ${JSON.stringify(error.response.data)}`)
      }

      throw new Error(`Ошибка при запросе к ЮKassa: ${error.message}`)
   }
}

export async function yookassaGetPaymentData(id) {
   const url = `${process.env.YOOKASSA_URL}/payments/${id}`
   const authString = Buffer.from(`${process.env.YOOKASSA_SHOP_ID}:${process.env.YOOKASSA_SECRET_KEY}`).toString('base64')

   try {
      const response = await axios.get(url,
         {
            headers: {
               'Authorization': `Basic ${authString}`
            }
         })

      return response.data
   }
   catch (error) {
      throw new Error(`Ошибка при получении данных платежа от ЮKassa: ${error.message}`)
   }
}