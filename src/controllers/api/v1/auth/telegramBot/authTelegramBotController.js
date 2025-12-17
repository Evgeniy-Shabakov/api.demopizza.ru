import axios from 'axios'
import config from '#config/config.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { nodeCache } from '#services/nodeCache.js'

export const authTelegramBotController = baseController(async (req, res) => {

   const message = req.body.message

   if (message.text) {
      await handleTextMessage(message)
   }
   if (message.contact) {
      await handleContactMessage(message)
   }

   res.status(204).send()
})

async function handleTextMessage(message) {
   const chatId = message.chat.id
   const text = message.text.trim()

   switch (true) {
      case text.startsWith('/start'):
         await handleStartCommand(chatId, text)
         break

      case text === '/help':
         await sendSimpleMessage(chatId, 'Доступные команды: /start, /help')
         break

      default:
         await sendSimpleMessage(chatId, `Не понимаю команду: '${text}'. Напишите /help`)
   }
}

async function handleStartCommand(chatId, text) {
   const linkUniquePart = text.split(' ')[1]

   if (!linkUniquePart) {
      await sendSimpleMessage(chatId, "Для входа используйте ссылку из приложения")
      return
   }

   const cacheData = nodeCache.get(`https://t.me/${config.authTelegramBotUsername}?start=${linkUniquePart}`)

   if (!cacheData) {
      await sendSimpleMessage(chatId, "⚠️ Ссылка недействительна или устарела. Обновите ссылку в приложении.")
      return
   }

   await sendSimpleMessage(chatId, "Все идет хорошо")
}

async function handleContactMessage(message) {
   await sendSimpleMessage(message.chat.id, 'вы отправили контакт')
}

async function sendSimpleMessage(chatId, text) {
   await axios.post(`https://api.telegram.org/bot${config.authTelegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: text
   })
}