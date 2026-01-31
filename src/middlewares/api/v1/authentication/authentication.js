import jwt from 'jsonwebtoken'
import config from '#config/config.js'
import { ERROR_CODE } from '#constants/api/v1/errorCode.js'

export function authentication(req, res, next) {
   try {
      const token = req.cookies.employeeAccessToken
      req.employee = jwt.verify(token, config.jwtEmployeesAccessTokenSecret)
      next()
   }
   catch (error) {
      error.code = ERROR_CODE.JWT_ACCESS_TOKEN_VERIFY_INVALID
      next(error)
   }
}