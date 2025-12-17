import jwt from 'jsonwebtoken'
import config from '#config/config.js'
import { extractToken } from '#utils/auth/JWTHelper.js'

export function verifyJWTAccessToken(req, res, next) {
   try {
      const token = extractToken(req)

      const user = jwt.verify(token, config.jwtAccessTokenSecret)
      req.user = user
      next()
   }
   catch (error) {
      next(error)
   }
}