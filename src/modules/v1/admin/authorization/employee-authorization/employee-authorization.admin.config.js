import fp from 'fastify-plugin'
import { employeeAuthorization } from './employee-authorization.js'

const EMPLOYEE_AUTHORIZATION_ROUTES = new Set([
   'POST /admin/employees',
   'GET /admin/employees/:id',
   'PUT /admin/employees/:id',
   'DELETE /admin/employees/:id',
])

export const employeeAuthorizationAdminConfig = fp((app) => {
   app.decorate('employeeAuthorizationAdminConfig', async (request, reply) => {
      const url = request.routeOptions.url.replace(/^\/api\/v1/, '')
      const key = `${request.method} ${url}`

      if (!EMPLOYEE_AUTHORIZATION_ROUTES.has(key)) return

      await employeeAuthorization(request, reply)
   })
})
