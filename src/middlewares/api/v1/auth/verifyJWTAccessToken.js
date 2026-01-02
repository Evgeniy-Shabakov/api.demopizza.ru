import jwt from 'jsonwebtoken'
import config from '#config/config.js'
import { ERROR_CODE } from '#constants/api/v1/errorCode.js'

export function verifyJWTAccessToken(req, res, next) {
   try {
      const token = req.cookies.accessToken

      const user = jwt.verify(token, config.jwtAccessTokenSecret)
      req.user = user
      next()
   }
   catch (error) {
      error.code = ERROR_CODE.JWT_ACCESS_TOKEN_VERIFY_INVALID
      next(error)
   }
}