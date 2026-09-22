import { pwaClientReply } from './pwa.client.reply.js'

export const pwaClientSchema = {
   get: {
      response: {
         200: pwaClientReply
      }
   },
}