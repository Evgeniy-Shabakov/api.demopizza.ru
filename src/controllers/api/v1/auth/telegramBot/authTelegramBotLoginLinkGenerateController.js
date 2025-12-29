import { randomUUID } from 'node:crypto'
import config from '#config/config.js'
import { nodeCache } from '#services/nodeCache.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const authTelegramBotLoginLinkGenerateController = baseController(async (req, res) => {

   const authTgBotLoginLink = `https://t.me/${config.authTelegramBotUsername}?start=${randomUUID()}`
   const authTgBotLoginSessionID = randomUUID()

   nodeCache.set(authTgBotLoginLink, {
      status: 'pending',
      authTgBotLoginSessionID: authTgBotLoginSessionID
   })

   res.cookie('authTgBotLoginLink', authTgBotLoginLink, config.authTgBotCookieOption)
   res.cookie('authTgBotLoginSessionID', authTgBotLoginSessionID, config.authTgBotCookieOption)

   res.status(200).json({
      data: {
         authTgBotLoginLink: authTgBotLoginLink
      }
   })
})