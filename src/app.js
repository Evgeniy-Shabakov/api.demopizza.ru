import express from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import config from '#config/config.js'
import router from '#routes/router.js'
import { errorHandler } from '#middlewares/api/v1/errorHandler.js'
import { pathNotFoundHandler } from '#middlewares/api/v1/pathNotFoundHandler.js'

export const app = express()

app.use(helmet())
app.use(compression())
app.use(cors({
   origin: [config.adminPanelUrl],
   credentials: true
}))

app.use(express.static('storage/public', {
   setHeaders: (res, path) => res.set('Cross-Origin-Resource-Policy', 'cross-origin') //для images на фронте
}))

app.use(rateLimit({
   windowMs: 60 * 1000,
   max: 100
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', router)

app.use(pathNotFoundHandler)
app.use(errorHandler)
