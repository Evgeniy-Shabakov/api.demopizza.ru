import { paymentWebhookController } from "./payment.webhook.controller.js"

export async function paymentWebhookRoutes(app) {
   app.post('/webhook', paymentWebhookController)
}
