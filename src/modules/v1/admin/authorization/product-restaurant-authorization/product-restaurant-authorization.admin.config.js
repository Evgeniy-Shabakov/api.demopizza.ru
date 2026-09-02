import fp from 'fastify-plugin'
import { ROUTE_AUTHORIZATION_MAP } from '../route-authorization/route-authorization-map.js'
import { productRestaurantAuthorization } from './product-restaurant-authorization.js'

const PRODUCT_RESTAURANT_AUTHORIZATION_ROUTES = new Set([
   'POST /admin/product-restaurants',
   'PUT /admin/product-restaurants/:id',
   'DELETE /admin/product-restaurants/:id',
])

export const productRestaurantAuthorizationAdminConfig = fp((app) => {
   app.decorate('productRestaurantAuthorizationAdminConfig', async (request, reply) => {
      const url = request.routeOptions.url.replace(/^\/api\/v1/, '')
      const key = `${request.method} ${url}`

      if (!PRODUCT_RESTAURANT_AUTHORIZATION_ROUTES.has(key)) return

      const permission = ROUTE_AUTHORIZATION_MAP.get(key)
      await productRestaurantAuthorization(permission)(request, reply)
   })
})
