export async function authClientTokenInfoController(request, reply) {

   return {
      data: request.user
   }
   
}