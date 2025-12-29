import jwt from 'jsonwebtoken'
import config from '#config/config.js'

export function verifyJWTAccessToken(req, res, next) {
   try {
      const token = req.cookies.accessToken

      const user = jwt.verify(token, config.jwtAccessTokenSecret)
      req.user = user
      next()
   }
   catch (error) {
      next(error)
   }
}