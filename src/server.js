import { app } from '#app.js'
import config from '#config/config.js'

app.listen(config.backendPort, () => {
   console.log(`Сервер запущен на http://localhost:${config.backendPort}`)
})
