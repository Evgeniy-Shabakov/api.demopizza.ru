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
      await sendSimpleMessage(chatId, "Для входа в сервис Demopizza используйте ссылку из приложения")
      return
   }

   const cacheCay = `https://t.me/${config.authTelegramBotUsername}?start=${linkUniquePart}`
   const cacheData = nodeCache.get(cacheCay)

   if (!cacheData) {
      await sendSimpleMessage(chatId, "⚠️ Ссылка недействительна или устарела. Обновите ссылку в приложении.")
      return
   }

   nodeCache.set(cacheCay, { status: 'waiting_phone' })
   nodeCache.set(chatId, cacheCay)   //для быстрого поиска cacheCay по chatId

   await sendPhoneRequest(chatId)
}

async function handleContactMessage(message) {
   const chatId = message.chat.id
   const phoneNumber = message.contact.phone_number

   await sendSimpleMessage(chatId, `вы отправили контакт ${phoneNumber}`)
}

async function sendSimpleMessage(chatId, text) {
   await axios.post(`https://api.telegram.org/bot${config.authTelegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: text
   })
}

async function sendPhoneRequest(chatId) {
   await axios.post(`https://api.telegram.org/bot${config.authTelegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: 'Для входа в сервис Demopizza необходимо подтвердить номер телефона',
      reply_markup: {
         keyboard: [
            [
               {
                  text: '✅ ПОДТВЕРДИТЬ НОМЕР ТЕЛЕФОНА',
                  request_contact: true
               }
            ]
         ],
         resize_keyboard: true,
         one_time_keyboard: true
      }
   })
}