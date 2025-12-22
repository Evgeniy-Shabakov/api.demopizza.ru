import { randomUUID } from 'node:crypto'
import config from '#config/config.js'
import { nodeCache } from '#services/nodeCache.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const authTelegramBotLoginLinkGenerateController = baseController(async (req, res) => {

   const authTelegramBotLoginLink = `https://t.me/${config.authTelegramBotUsername}?start=${randomUUID()}`
   
   nodeCache.set(authTelegramBotLoginLink, { status: 'pending' })
   
   res.status(200).json({
      data: {
         authTelegramBotLoginLink
      }
   })
})