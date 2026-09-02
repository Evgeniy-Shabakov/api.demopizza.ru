export async function authAdminTokenInfoController(request, reply) {

   return {
      data: request.user
   }
   
}