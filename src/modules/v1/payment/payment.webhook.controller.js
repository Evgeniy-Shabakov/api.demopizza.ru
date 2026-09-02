import { prisma } from '#lib/prisma.js'
import { isAllowedIp } from './ip.helper.js'
import { YOOKASSA_IP_ALLOWED, YOOKASSA_PAYMENT_STATUS_TYPE} from './yookassa.service.js'
import { PAYMENT_STATUS } from '#constants/v1/data-types/payment-status.js'

export async function paymentWebhookController(request, reply) {

   if (!isAllowedIp(request.ip, YOOKASSA_IP_ALLOWED)) {
      return reply.code(403).send('Forbidden')
   }

   const payment = await prisma.payment.update({
      where: {
         provider_providerPaymentId: {
            provider: 'yookassa',
            providerPaymentId: request.body.object.id
         }
      },
      data: {
         status: request.body.object.status,
         paidAt: request.body.object.status === YOOKASSA_PAYMENT_STATUS_TYPE.SUCCEEDED ? new Date() : undefined
      }
   })

   const order = await prisma.order.findUnique({
      where: {
         paymentId: payment.id
      }
   })

   if (order) {
      let newPaymentStatus

      switch (payment.status) {
         case YOOKASSA_PAYMENT_STATUS_TYPE.SUCCEEDED:
            newPaymentStatus = PAYMENT_STATUS.PAID
            break
         case YOOKASSA_PAYMENT_STATUS_TYPE.CANCELLED:
            newPaymentStatus = PAYMENT_STATUS.CANCELLED
            break
         case YOOKASSA_PAYMENT_STATUS_TYPE.PENDING:
            newPaymentStatus = PAYMENT_STATUS.PENDING
            break
         default:
            newPaymentStatus = PAYMENT_STATUS.NO_PAID
      }

      await prisma.order.update({
         where: { id: order.id },
         data: {
            paymentStatusId: newPaymentStatus.ID
         }
      })
   }
   else {
      console.warn(`paymentWebhookController: Платеж ${payment.id} не связан ни с одним заказом`)
   }

   return reply.code(200).send()
}