import axios from 'axios'
import config from '#config/config.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const authTelegramBotController = baseController(async (req, res) => {

   const message = req.body.message

   if (message.text) {
      await sendSimpleMessage(message.chat.id, 'вы отправили текст')
   }
   if (message.contact) {
      await sendSimpleMessage(message.chat.id, 'вы отправили контакт')
   }



   res.status(204).send()
})

async function sendSimpleMessage(chatId, text) {
   await axios.post(`https://api.telegram.org/bot${config.authTelegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: text
   })
}