import { companyClientRoutes } from "#modules/v1/client/company/company.client.routes.js"
import { cityClientRoutes } from "#modules/v1/client/city/city.client.routes.js"
import { categoryClientRoutes } from "#modules/v1/client/category/category.client.routes.js"
import { restaurantClientRoutes } from "#modules/v1/client/restaurant/restaurant.client.routes.js"
import { dadataClientRoutes } from "#modules/v1/client/dadata/dadata.client.routes.js"
import { designClientRoutes } from "#modules/v1/client/design/design.client.routes.js"
import { legalDocumentClientRoutes } from "#modules/v1/client/legal-document/legal-document.client.routes.js"
import { orderClientRoutes } from "#modules/v1/client/order/order.client.routes.js"
import { authClientRoutes } from "#modules/v1/client/auth/auth.client.routes.js"
import { promocodeClientRoutes } from "#modules/v1/client/promocode/promocode.client.routes.js"

export async function clientRoutes(fastify) {

   await fastify.register(authClientRoutes, { prefix: '/auth' })
   await fastify.register(companyClientRoutes, { prefix: '/company' })
   await fastify.register(cityClientRoutes, { prefix: '/cities' })
   await fastify.register(categoryClientRoutes, { prefix: '/categories' })
   await fastify.register(restaurantClientRoutes, { prefix: '/restaurants' })
   await fastify.register(dadataClientRoutes, { prefix: '/dadata' })
   await fastify.register(designClientRoutes, { prefix: '/designs' })
   await fastify.register(legalDocumentClientRoutes, { prefix: '/legal-documents' })
    await fastify.register(orderClientRoutes, { prefix: '/orders' })

    await fastify.register(async (app) => {
       app.addHook('preHandler', app.authenticateUser)
       await app.register(promocodeClientRoutes, { prefix: '/promocodes' })
    })
    
}