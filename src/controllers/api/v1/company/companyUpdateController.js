import { prisma } from '#services/prismaClient.js'
import { baseController } from "#controllers/api/v1/baseController.js"
import { companyResource } from "#resources/api/v1/companyResource.js"

export const companyUpdateController = baseController(async (req, res) => {
   delete req.body.logoFile //без удаления лишних полей prisma выдает ошибку
   delete req.body.faviconFile //без удаления лишних полей prisma выдает ошибку

   if (req.files && req.files['logoFile']?.[0]) {
      const logo = req.files['logoFile'][0]
      req.body.logoPath = logo.destination + logo.filename
   }

   if (req.files && req.files['faviconFile']?.[0]) {
      const favicon = req.files['faviconFile'][0]
      req.body.faviconPath = favicon.destination + favicon.filename
   }

   const record = await prisma.company.update({
      where: { id: 1 },
      data: req.body
   })

   res.status(200).json(new companyResource(record, {}))
})