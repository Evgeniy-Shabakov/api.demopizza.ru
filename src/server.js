import "dotenv/config"
import { app } from "#app.js"

const port = process.env.BACKEND_PORT
const mode = process.env.NODE_ENV

try {
   await app.listen({ 
      port: Number(port), 
      host: '0.0.0.0' //для докер
   })
   console.log(`Сервер запущен в режиме ${mode} на http://localhost:${port}`)
} catch (err) {
   app.log.error(err)
   process.exit(1)
}