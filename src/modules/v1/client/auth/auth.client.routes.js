import { authClientLoginSchema } from './login/auth.client.login.schema.js'
import { authClientLoginController } from './login/auth.client.login.controller.js'
import { authClientLogoutController } from './logout/auth.client.logout.controller.js'
import { authClientRefreshController } from './refresh/auth.client.refresh.controller.js'
import { authClientTokenInfoController } from './token-info/auth.client.token-info.controller.js'
import { authClientMeSchema } from './me/auth.client.me.schema.js'
import { authClientMeController } from './me/auth.client.me.controller.js'

export async function authClientRoutes(app) {
   app.post('/login', { schema: authClientLoginSchema }, authClientLoginController)
   app.post('/refresh', authClientRefreshController)
   app.delete('/logout', authClientLogoutController)

   app.get('/token-info', {
      preHandler: app.authenticateUser
   },
      authClientTokenInfoController)

   app.get('/me', {
      preHandler: app.authenticateUser,
      schema: authClientMeSchema
   },
      authClientMeController)
}
