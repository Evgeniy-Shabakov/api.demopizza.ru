import { orderClientCreateService } from "./order.client.create.service.js"

export async function orderClientCreateController(request, reply) {
   // if (req.body.userId && req.user.id !== req.body.userId) throw new Error('Неверный userId')

   const { order, payment } = await orderClientCreateService(request.body)

   return reply.code(201).send({
      data: order,
      meta: {
         ...(payment && { payment })
      }
   })
}