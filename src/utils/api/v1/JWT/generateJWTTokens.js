import jwt from 'jsonwebtoken'
import config from '#config/config.js'
import { prisma } from '#services/prismaClient.js'
import { getMaxEmployeesControlLevel } from '#utils/api/v1/employeeHelper.js'

export async function generateJWTTokens(req, employee) {
   const employeeRoles = employee.employeeRoles.map(item => {
      return {
         roleId: item.roleId,
         restaurantId: item.restaurantId
      }
   })

   const jwtPayload = {
      id: employee.id,
      phone: employee.phone,
      employeeRoles: employeeRoles,
      maxEmployeesControlLevel: getMaxEmployeesControlLevel(employeeRoles)
   }

   const accessToken = generateJWTAccessTokenForEmployees(jwtPayload)
   const refreshToken = generateJWTRefreshTokenForEmployees(jwtPayload)

   await prisma.refreshToken.create({
      data: {
         token: refreshToken,
         employeeId: employee.id,
         expiresAt: new Date(jwt.decode(refreshToken).exp * 1000),
         userAgent: req.get('User-Agent') || null,
         ipAddress: req.ip || req.connection.remoteAddress || null
      }
   })

   return {
      accessToken,
      refreshToken
   }
}

function generateJWTAccessTokenForEmployees(payload) {
   return jwt.sign(
      payload,
      config.jwtEmployeesAccessTokenSecret,
      { expiresIn: config.jwtEmployeesAccessTokenLiveTime }
   )
}

function generateJWTRefreshTokenForEmployees(payload) {
   return jwt.sign(
      payload,
      config.jwtEmployeesRefreshTokenSecret,
      { expiresIn: config.jwtEmployeesRefreshTokenLiveTime }
   )
}