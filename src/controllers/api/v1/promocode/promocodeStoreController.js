import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { PromocodeResource } from "#resources/api/v1/PromocodeResource.js"

export const promocodeStoreController = baseController(async (req, res) => {
console.log({...req.body})

   const record = await prisma.promocode.create({
      data: {
         ...req.body,
         code: generatePromocode(),
         employeeId: req.employee.id
      }
   })

   res.status(201).json(new PromocodeResource(record, {}))
})

function generatePromocode(length = 8) {
   const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
   let promocode = ''

   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      promocode += chars[randomIndex]
   }

   return promocode
}