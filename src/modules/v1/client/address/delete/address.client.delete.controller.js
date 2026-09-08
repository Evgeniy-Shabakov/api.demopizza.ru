import { addressClientDeleteService } from "./address.client.delete.service.js"

export async function addressClientDeleteController(request, reply) {
   await addressClientDeleteService({
      userId: request.user.id,
      id: request.params.id
   })

   return reply.code(204).send()
}