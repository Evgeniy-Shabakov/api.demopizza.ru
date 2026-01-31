import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { EmployeeResource } from "#resources/api/v1/EmployeeResource.js"

export const employeeUpdateController = baseController(async (req, res) => {

   const record = await prisma.employee.update({
      where: { id: req.params.id },
      data: {
         ...req.body,
         employeeRoles: {
            deleteMany: {},
            create: req.body.employeeRoles
         }
      },
      include: {
         employeeRoles: {
            include: {
               role: true,
               restaurant: true
            }
         }
      }
   })

   res.status(200).json(new EmployeeResource(record, {}))
})