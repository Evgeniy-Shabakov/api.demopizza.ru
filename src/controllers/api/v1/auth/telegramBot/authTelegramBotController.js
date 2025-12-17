import axios from 'axios'
import config from '#config/config.js'
import { baseController } from "#controllers/api/v1/baseController.js"

export const authTelegramBotController = baseController(async (req, res) => {

   const chatId = req.body.message.chat.id

   await axios.post(`https://api.telegram.org/bot${config.authTelegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: 'Привет'
   })

   res.status(204).send()
})