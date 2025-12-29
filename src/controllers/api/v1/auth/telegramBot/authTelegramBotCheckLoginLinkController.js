import { nodeCache } from '#services/nodeCache.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UnauthorizedError } from '#errors/api/v1/UnauthorizedError.js'

export const authTelegramBotCheckLoginLinkController = baseController(async (req, res) => {
   const authTgBotLoginLink = req.cookies.authTgBotLoginLink
   const authTgBotLoginSessionID = req.cookies.authTgBotLoginSessionID

   const cacheData = nodeCache.get(authTgBotLoginLink)

   if (!cacheData) {
      throw new UnauthorizedError('Ссылка на телеграм устарела, обновите страницу')
   }

   if (cacheData.authTgBotLoginSessionID !== authTgBotLoginSessionID) {
      throw new UnauthorizedError('Сессия аутентификации не совпадает')
   }

   res.status(200).json({
      data: {
         status: cacheData.status
      }
   })
})