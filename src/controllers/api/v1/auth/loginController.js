import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { UserResource } from "#resources/api/v1/userResource.js"
import { generateJWTTokens } from '#utils/auth/JWTHelper.js'

export const loginController = baseController(async (req, res) => {

   const phone = req.body.phone

   let user = await prisma.user.findUnique({
      where: { phone: phone }
   })

   if (!user) {
      user = await prisma.user.create({
         data: { phone: phone }
      })
   }

   const tokens = await generateJWTTokens(req, user)

   res.json({
      ...tokens,
      user: new UserResource(user)
   })
})