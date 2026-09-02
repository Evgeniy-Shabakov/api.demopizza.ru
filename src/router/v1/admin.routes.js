import { authAdminRoutes } from "#modules/v1/admin/auth/auth.admin.routes.js"
import { cityAdminRoutes } from "#modules/v1/admin/city/city.admin.routes.js"
import { countryAdminRoutes } from "#modules/v1/admin/country/country.admin.routes.js"
import { restaurantScheduleAdminRoutes } from "#modules/v1/admin/restaurant-schedule/restaurant-schedule.admin.routes.js"
import { restaurantAdminRoutes } from "#modules/v1/admin/restaurant/restaurant.admin.routes.js"
import { deliveryZoneAdminRoutes } from "#modules/v1/admin/delivery-zone/delivery-zone.admin.routes.js"
import { categoryAdminRoutes } from "#modules/v1/admin/category/category.admin.routes.js"
import { designAdminRoutes } from "#modules/v1/admin/design/design.admin.routes.js"
import { legalDocumentAdminRoutes } from "#modules/v1/admin/legal-document/legal-document.admin.routes.js"
import { productAdminRoutes } from "#modules/v1/admin/product/product.admin.routes.js"
import { productRestaurantAdminRoutes } from "#modules/v1/admin/product-restaurant/product-restaurant.admin.routes.js"
import { companyAdminRoutes } from "#modules/v1/admin/company/company.admin.routes.js"
import { orderAdminRoutes } from "#modules/v1/admin/order/order.admin.routes.js"
import { employeeAdminRoutes } from "#modules/v1/admin/employee/employee.admin.routes.js"
import { promocodeAdminRoutes } from "#modules/v1/admin/promocode/promocode.admin.routes.js"

export async function adminRoutes(fastify) {

   await fastify.register(authAdminRoutes, { prefix: '/admin/auth' })

   await fastify.register(async (app) => {
      app.addHook('preHandler', app.authenticateEmployee)
      app.addHook('preHandler', app.routeAuthorizationAdminConfig)
      app.addHook('preHandler', app.employeeAuthorizationAdminConfig)
      app.addHook('preHandler', app.productRestaurantAuthorizationAdminConfig)

      await app.register(companyAdminRoutes, { prefix: '/company' })
      await app.register(countryAdminRoutes, { prefix: '/countries' })
      await app.register(cityAdminRoutes, { prefix: '/cities' })
      await app.register(restaurantScheduleAdminRoutes, { prefix: '/restaurant-schedules' })
      await app.register(restaurantAdminRoutes, { prefix: '/restaurants' })
      await app.register(deliveryZoneAdminRoutes, { prefix: '/delivery-zones' })
      await app.register(categoryAdminRoutes, { prefix: '/categories' })
      await app.register(productAdminRoutes, { prefix: '/products' })
      await app.register(productRestaurantAdminRoutes, { prefix: '/product-restaurants' })
      await app.register(designAdminRoutes, { prefix: '/designs' })
      await app.register(legalDocumentAdminRoutes, { prefix: '/legal-documents' })
      await app.register(orderAdminRoutes, { prefix: '/orders' })
      await app.register(employeeAdminRoutes, { prefix: '/employees' })
      await app.register(promocodeAdminRoutes, { prefix: '/promocodes' })
   }, { prefix: '/admin' })
   
}