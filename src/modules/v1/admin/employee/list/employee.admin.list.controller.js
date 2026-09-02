import { prisma } from '#lib/prisma.js'
import { getMaxEmployeesControlLevel } from '../employee.admin.helper.js'

export async function employeeAdminListController(request, reply) {

   let records = await prisma.employee.findMany({
      include: {
         employeeRoles:
         {
            include: {
               role: true,
               restaurant: true
            }
         }
      },
      orderBy: { id: 'asc' }
   })

   records = records.filter(item => {
      return request.user.maxEmployeesControlLevel >= getMaxEmployeesControlLevel(item.employeeRoles)
   })

   return { data: records }
}
