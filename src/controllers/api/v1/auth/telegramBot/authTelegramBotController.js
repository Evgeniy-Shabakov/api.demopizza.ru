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
   const linkUniquePart = text.split(' ')[1]

   if (text.startsWith('/start') && linkUniquePart) {
      const linkAsCacheCay = `https://t.me/${config.authTelegramBotUsername}?start=${linkUniquePart}`
      const cacheData = nodeCache.get(linkAsCacheCay)

      if (!cacheData) {
         await sendSimpleMessage(chatId, '⚠️ Ссылка недействительна или устарела. Обновите ссылку в приложении.')
         return
      }

      nodeCache.set(linkAsCacheCay, {
         ...cacheData,
         status: 'waiting_phone'
      })
      nodeCache.set(chatId, linkAsCacheCay)   //для быстрого поиска linkAsCacheCay по chatId

      await sendPhoneRequest(chatId)
   }
   else {
      sendSimpleMessage(chatId,
         `⚠️ Бот Demopizza предназначен только для входа в сервисы Demopizza. Для входа используйте кнопку из приложения`)
   }
}

async function handleContactMessage(message) {
   const chatId = message.chat.id
   const phoneNumber = message.contact.phone_number

   const linkAsCacheCay = nodeCache.get(chatId)
   nodeCache.del(chatId)  //Удаляем временную связь chatId → linkAsCacheCay

   if (!linkAsCacheCay) {
      await sendSimpleMessage(chatId, '⚠️ Сначала начните процесс входа через приложение.')
      return
   }

   const authData = nodeCache.get(linkAsCacheCay)

   if (!authData || authData.status !== 'waiting_phone') {
      await sendSimpleMessage(chatId, "⚠️ Запрос на подтверждение номера не найден.")
      return
   }

   nodeCache.set(linkAsCacheCay, {
      ...authData,
      status: 'verified',
      phone: phoneNumber
   })

   await sendSimpleMessage(chatId, `✅ Номер подтверждён.
      \nВернитесь в сервис Demopizza. Вход произойдет автоматически`)
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