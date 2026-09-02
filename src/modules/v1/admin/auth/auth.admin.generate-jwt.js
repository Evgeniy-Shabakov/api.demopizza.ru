import { prisma } from '#lib/prisma.js'
import { getMaxEmployeesControlLevel } from '../employee/employee.admin.helper.js'

export async function adminGenerateJWTTokens(request, employee) {
   
   const employeeRoles = employee.employeeRoles.map(item => ({
      roleId: item.roleId,
      restaurantId: item.restaurantId
   }))

   const jwtPayload = {
      id: employee.id,
      phone: employee.phone,
      employeeRoles,
      maxEmployeesControlLevel: getMaxEmployeesControlLevel(employeeRoles)
   }

   const accessToken = request.server.jwt.employeeAccess.sign(jwtPayload)
   const refreshToken = request.server.jwt.employeeRefresh.sign(jwtPayload)

   await prisma.employeeRefreshToken.create({
      data: {
         token: refreshToken,
         employeeId: employee.id,
         expiresAt: new Date(request.server.jwt.employeeRefresh.decode(refreshToken).exp * 1000),
      }
   })

   return { accessToken, refreshToken }
}