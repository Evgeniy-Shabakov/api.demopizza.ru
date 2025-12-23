import { nodeCache } from '#services/nodeCache.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { AuthError } from '#utils/errors/authError.js'

export const authTelegramBotCheckLoginLinkController = baseController(async (req, res) => {
   const authTelegramBotLoginLink = req.body.loginTgBotLink
   const tgBotLoginSession = req.body.tgBotLoginSession

   const cacheData = nodeCache.get(authTelegramBotLoginLink)

   if (!cacheData) {
      throw new AuthError(403, 'Ссылка на телеграм устарела, обновите страницу')
   }

   if (cacheData.tgBotLoginSession !== tgBotLoginSession) {
      throw new AuthError(403, 'Сессия аутентификации не совпадает')
   }

   res.status(200).json({ status: cacheData.status })
})