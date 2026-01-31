import dotenv from 'dotenv'
import { app } from '#app.js'

dotenv.config()  // Загружаем переменные окружения из .env

const port = process.env.BACKEND_PORT

app.listen(port, () => {
   console.log(`Сервер запущен в режиме ${process.env.NODE_ENV} на http://localhost:${port}`)
})
