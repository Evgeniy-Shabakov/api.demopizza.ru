import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { EmployeeResource } from "#resources/api/v1/EmployeeResource.js"
import { getMaxEmployeesControlLevel } from '#utils/api/v1/employeeHelper.js'

export const employeeIndexController = baseController(async (req, res) => {

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
      orderBy: req.sort
   })

   records = records.filter(item => {
      return req.employee.maxEmployeesControlLevel >= getMaxEmployeesControlLevel(item.employeeRoles)
   })

   res.status(200).json(EmployeeResource.collection(records, {}))
})
