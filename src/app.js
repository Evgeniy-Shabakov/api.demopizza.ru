import Fastify from 'fastify'
import { validatorCompiler, serializerCompiler } from '@fastify/type-provider-zod'
import fastifyCookie from '@fastify/cookie'
import multipart from '@fastify/multipart'
import fastifyStatic from '@fastify/static'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'
import rateLimit from '@fastify/rate-limit'

import { loggerConfig } from "#config/v1/logger.config.js"
import { authAdminConfig } from '#modules/v1/admin/auth/auth.admin.config.js'
import { routeAuthorizationAdminConfig } from '#modules/v1/admin/authorization/route-authorization/route-authorization.admin.config.js'
import { employeeAuthorizationAdminConfig } from '#modules/v1/admin/authorization/employee-authorization/employee-authorization.admin.config.js'
import { productRestaurantAuthorizationAdminConfig } from '#modules/v1/admin/authorization/product-restaurant-authorization/product-restaurant-authorization.admin.config.js'
import { authClientConfig } from '#modules/v1/client/auth/auth.client.config.js'
import { helmetConfig } from '#config/v1/helmet.config.js'
import { corsConfig } from '#config/v1/cors.config.js'
import { rateLimitConfig } from '#config/v1/rate-limit.config.js'
import { multipartConfig } from '#config/v1/multipart.config.js'
import { staticConfig } from '#config/v1/static.config.js'
import { router } from "#router/v1/router.js"

import { pathNotFoundHandler } from "#errors/v1/path-not-found.handler.js"
import { errorHandler } from "#errors/v1/error.handler.js"

export const app = Fastify({
   logger: loggerConfig,
   trustProxy: '127.0.0.1'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(helmet, helmetConfig)
app.register(cors, corsConfig)
app.register(rateLimit, rateLimitConfig)

app.register(fastifyCookie)
app.register(authAdminConfig)
app.register(authClientConfig)

app.register(routeAuthorizationAdminConfig)
app.register(employeeAuthorizationAdminConfig)
app.register(productRestaurantAuthorizationAdminConfig)

app.register(multipart, multipartConfig)
app.register(fastifyStatic, staticConfig)

app.register(router, { prefix: '/api/v1' })

app.setNotFoundHandler(pathNotFoundHandler)
app.setErrorHandler(errorHandler)
