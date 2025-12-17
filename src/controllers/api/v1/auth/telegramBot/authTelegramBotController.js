import axios from 'axios'
import config from '#config/config.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const authTelegramBotController = baseController(async (req, res) => {

   const message = req.body.message

   if (message.text) {
      await handleTextMessage(message)
   }
   if (message.contact) {
      await sendSimpleMessage(message.chat.id, 'вы отправили контакт')
   }

   res.status(204).send()
})

async function handleTextMessage(message) {
   const chatId = message.chat.id
   const text = message.text.trim()

   switch (true) {
      case text.startsWith('/start'):
         // this.handleStartCommand(chatId, text)
         await sendSimpleMessage(chatId, 'Вы отправили команду старт')
         break

      case text === '/help':
         await sendSimpleMessage(chatId, 'Доступные команды: /start, /help')
         break

      default:
         await sendSimpleMessage(chatId, `Не понимаю команду: '${text}'. Напишите /help`)
   }
}

async function sendSimpleMessage(chatId, text) {
   await axios.post(`https://api.telegram.org/bot${config.authTelegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: text
   })
}