import { authAdminLoginSchema } from './login/auth.admin.login.schema.js'
import { authAdminLoginController } from './login/auth.admin.login.controller.js'
import { authAdminLogoutController } from './logout/auth.admin.logout.controller.js'
import { authAdminRefreshController } from './refresh/auth.admin.refresh.controller.js'
import { authAdminTokenInfoController } from './token-info/auth.admin.token-info.controller.js'
import { authAdminMeSchema } from './me/auth.admin.me.schema.js'
import { authAdminMeController } from './me/auth.admin.me.controller.js'

export async function authAdminRoutes(app) {
   app.post('/login', { schema: authAdminLoginSchema }, authAdminLoginController)
   app.post('/refresh', authAdminRefreshController)
   app.delete('/logout', authAdminLogoutController)

   app.get('/token-info', {
      preHandler: app.authenticateEmployee
   },
      authAdminTokenInfoController)

   app.get('/me', {
      preHandler: app.authenticateEmployee,
      schema: authAdminMeSchema
   },
      authAdminMeController)
}
