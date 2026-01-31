import express from 'express'
import { authentication } from '#middlewares/api/v1/authentication/authentication.js'
import { loginController } from '#controllers/api/v1/authentication/loginController.js'
import { logoutController } from '#controllers/api/v1/authentication/logoutController.js'
import { refreshTokenController } from '#controllers/api/v1/authentication/refreshTokenController.js'
import { authTelegramBotController } from '#controllers/api/v1/authentication/telegramBot/authTelegramBotController.js'
import { authTelegramBotLoginLinkGenerateController } from '#controllers/api/v1/authentication/telegramBot/authTelegramBotLoginLinkGenerateController.js'
import { authTelegramBotCheckLoginLinkController } from '#controllers/api/v1/authentication/telegramBot/authTelegramBotCheckLoginLinkController.js'
import { loginSchemaValidation } from '#validations/api/v1/authentication/loginSchemaValidation.js'
import { validateLoginBody } from '#middlewares/api/v1/validators/validateLoginBody.js'

const router = express.Router()

router.post('/login', validateLoginBody(loginSchemaValidation), loginController)
router.delete('/logout', logoutController)
router.post('/refresh', refreshTokenController)

router.post('/telegram-bot/webhook', authTelegramBotController)
router.get('/telegram-bot/get-login-link', authTelegramBotLoginLinkGenerateController)
router.post('/telegram-bot/check-login-link', authTelegramBotCheckLoginLinkController)

router.get('/jwt-payload', authentication, (req, res) => {  
   res.json({
      data: {
         jwtPayload: req.employee       //внести изменения после добавлния аутентификации для users
      }
   })
})

export default router