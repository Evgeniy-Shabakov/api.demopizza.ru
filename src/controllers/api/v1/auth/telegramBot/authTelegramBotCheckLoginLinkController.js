import { nodeCache } from '#services/nodeCache.js'
import { AuthError } from '#utils/errors/authError.js'

export const authTelegramBotCheckLoginLinkCotroller = baseController(async (req, res) => {
   cacheData = nodeCache.get(req.body.loginLink)

   if (!cacheData) throw new AuthError(403, 'Ссылка на телеграм устарела, обновите страницу')

   res.status(200).json(cacheData)
})