import jwt from 'jsonwebtoken'
import config from '#config/config.js'

export function refreshTokenController(req, res) {
   const username = req.body.username
   const user = { name: username }

   const accessToken = jwt.sign(user, config.jwtAccessTokenSecret, { expiresIn: '30s' })
   const refreshToken = jwt.sign(user, config.jwtRefreshTokenSecret, { expiresIn: '2m' })

   res.json({ accessToken, refreshToken })
}