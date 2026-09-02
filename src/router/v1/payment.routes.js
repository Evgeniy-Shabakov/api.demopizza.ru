import { paymentWebhookRoutes } from "#modules/v1/payment/payment.webhook.routes.js"

export async function paymentRoutes(fastify) {

   await fastify.register(paymentWebhookRoutes, { prefix: '/payments' })
   
}