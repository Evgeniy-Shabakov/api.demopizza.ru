import express from 'express'
import { verifyJWTAccessToken } from '#middlewares/api/v1/auth/verifyJWTAccessToken.js'
import { loginController } from '#controllers/api/v1/auth/loginController.js'
import { logoutController } from '#controllers/api/v1/auth/logoutController.js'
import { refreshTokenController } from '#controllers/api/v1/auth/refreshTokenController.js'
import { authTelegramBotController } from '#controllers/api/v1/auth/telegramBot/authTelegramBotController.js'
import { authTelegramBotLoginLinkGenerateController } from '#controllers/api/v1/auth/telegramBot/authTelegramBotLoginLinkGenerateController.js'

const router = express.Router()

router.post('/login', loginController)
router.delete('/logout', logoutController)
router.post('/refresh-token', refreshTokenController)

router.post('/telegram-bot/webhook', authTelegramBotController)
router.get('/telegram-bot/get-login-link', authTelegramBotLoginLinkGenerateController)

router.get('/user', verifyJWTAccessToken, (req, res) => {
   res.json({ user: req.user })
})

export default router