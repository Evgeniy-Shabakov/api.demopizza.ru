import jwt from 'jsonwebtoken'
import config from '#config/config.js'

export function generateJWTAccessToken(payload) {
   return jwt.sign(
      payload,
      config.jwtAccessTokenSecret,
      { expiresIn: config.jwtAccessTokenLiveTime }
   )
}

export function generateJWTRefreshToken(payload) {
   return jwt.sign(
      payload,
      config.jwtRefreshTokenSecret,
      { expiresIn: config.jwtRefreshTokenLiveTime }
   )
}