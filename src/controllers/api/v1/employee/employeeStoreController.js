import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { EmployeeResource } from "#resources/api/v1/EmployeeResource.js"

export const employeeStoreController = baseController(async (req, res) => {

   const record = await prisma.employee.create({
      data: {
         ...req.body,
         employeeRoles: { create: req.body.employeeRoles }
      },
      include: {
         employeeRoles:
         {
            include: {
               role: true,
               restaurant: true
            }
         }
      }
   })

   res.status(201).json(new EmployeeResource(record, {}))
})