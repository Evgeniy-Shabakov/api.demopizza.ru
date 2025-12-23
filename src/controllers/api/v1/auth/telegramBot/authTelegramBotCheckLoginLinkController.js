import { nodeCache } from '#services/nodeCache.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { AuthError } from '#utils/errors/authError.js'

export const authTelegramBotCheckLoginLinkController = baseController(async (req, res) => {
   const authTgBotLoginLink = req.body.authTgBotLoginLink
   const authTgBotLoginSessionID = req.body.authTgBotLoginSessionID

   const cacheData = nodeCache.get(authTgBotLoginLink)

   if (!cacheData) {
      throw new AuthError(403, 'Ссылка на телеграм устарела, обновите страницу')
   }

   if (cacheData.authTgBotLoginSessionID !== authTgBotLoginSessionID) {
      throw new AuthError(403, 'Сессия аутентификации не совпадает')
   }

   res.status(200).json({ status: cacheData.status })
})