import fp from 'fastify-plugin'
import { ROUTE_AUTHORIZATION_MAP } from './route-authorization-map.js'
import { routeAuthorization } from './route-authorization.js'

export const routeAuthorizationAdminConfig = fp((app) => {

   app.decorate('routeAuthorizationAdminConfig', async (request, reply) => {

      const url = request.routeOptions.url.replace(/^\/api\/v1/, '')
      const key = `${request.method} ${url}`

      if (key === 'PATCH /admin/employees/:id/change-password') return

      const permission = ROUTE_AUTHORIZATION_MAP.get(key)

      await routeAuthorization(permission)(request, reply)

   })

})
