import { adminRoutes } from '#router/v1/admin.routes.js'
import { clientRoutes } from '#router/v1/client.routes.js'
import { paymentRoutes } from '#router/v1/payment.routes.js'

export async function router(fastify) {

   await fastify.register(adminRoutes)
   await fastify.register(clientRoutes)
   await fastify.register(paymentRoutes)
   
}