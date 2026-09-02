
export function pathNotFoundHandler(request, reply) {

   return reply.status(404).send({
      statusCode: 404,
      code: 'NOT_FOUND',
      message: 'Маршрут не найден',
      details: {
         method: request.method,
         path: request.raw.url,
         fullUrl: `${request.protocol}://${request.hostname}${request.raw.url}`
      }
   })
   
}
