import jwt from 'jsonwebtoken'
import config from '#config/config.js'

export function verifyJWTAccessToken(req, res, next) {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]

   if (!token) return res.sendStatus(401)

   jwt.verify(token, config.jwtAccessTokenSecret, (error, user) => {
      if (error) {
         return res.sendStatus(403)
      }

      req.user = user
      next()
   })
}