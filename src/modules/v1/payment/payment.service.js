import { prisma } from '#lib/prisma.js'
import { yookassaCreatePayment, yookassaGetPaymentData } from './yookassa.service.js'
export async function createPayment({ value, description, returnUrl, orderId }) {
   const onlinePayment = await yookassaCreatePayment({
      value: value,
      description: description,
      returnUrl: returnUrl
   })

   const payment = await prisma.payment.create({
      data: {
         provider: 'yookassa',
         providerPaymentId: onlinePayment.id,
         status: onlinePayment.status,
         amount: onlinePayment.amount.value,
         currency: onlinePayment.amount.currency,
         description: onlinePayment.description,
         returnUrl: returnUrl,
         paymentUrl: onlinePayment.confirmation.confirmation_url,
         metadata: onlinePayment
      }
   })

   return payment
}

//пока не используется, сделал для ручной проверки статуса платежа
export async function getPaymentDataFromProvider(id) {
   const paymentInDB = await prisma.payment.findUniqueOrThrow({
      where: { id }
   })

   const paymentInProvider = await yookassaGetPaymentData(paymentInDB.providerPaymentId)

   const paymentInDBUpdated = await prisma.payment.update({
      where: { id },
      data: {
         status: paymentInProvider.status,
         metadata: paymentInProvider
      }
   })

   return paymentInDBUpdated
}