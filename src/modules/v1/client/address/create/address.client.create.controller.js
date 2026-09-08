import { addressClientCreateService } from "./address.client.create.service.js"

export async function addressClientCreateController(request, reply) {
   const address = await addressClientCreateService({
      userId: request.user.id,
      data: request.body
   })

   return reply.code(201).send({
      data: address
   })
}