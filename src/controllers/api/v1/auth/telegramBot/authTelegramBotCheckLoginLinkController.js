import { nodeCache } from '#services/nodeCache.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { AuthError } from '#utils/errors/authError.js'

export const authTelegramBotCheckLoginLinkController = baseController(async (req, res) => {
   const cacheData = nodeCache.get(req.body.loginTgBotLink)

   if (!cacheData) throw new AuthError(403, 'Ссылка на телеграм устарела, обновите страницу')

   res.status(200).json(cacheData)
})