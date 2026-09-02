import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { prisma } from '#lib/prisma.js'

function genProductImageFilePath(file) {
   const ext = path.extname(file.filename).toLowerCase()

   return path.join('storage/public/images/products', `${crypto.randomUUID()}${ext}`)
}

async function saveProductImageFile(filePath, file) {
   const buffer = await file.toBuffer()
   await fs.writeFile(filePath, buffer)
}

async function safeDeleteProductImageFile(filePath) {
   if (!filePath) return

   try {
      await fs.unlink(filePath)
   } catch (error) {
      if (error.code === 'ENOENT') return

      console.error(`Не удалось физически удалить файл ${filePath}:`, error.message)
   }
}

export const productAdminService = {
   
   list() {
      return prisma.product.findMany({
         include: {
            category: true
         },
         orderBy: { id: 'asc' }
      })
   },

   getOne(id) {
      return prisma.product.findUniqueOrThrow({ where: { id } })
   },

   async create(data) {
      const { imageFile, ...storeData } = data

      if (imageFile) {
         storeData.imagePath = genProductImageFilePath(imageFile)
      }

      const newProduct = await prisma.product.create({
         data: storeData
      })

      if (imageFile) {
         await saveProductImageFile(storeData.imagePath, imageFile)
      }

      return newProduct
   },

   async update(id, data) {
      const { imageFile, ...updateData } = data

      const oldRecord = imageFile
         ? await prisma.product.findUniqueOrThrow({ where: { id } })
         : null

      if (imageFile) {
         updateData.imagePath = genProductImageFilePath(imageFile)
      }

      const updatedProduct = await prisma.product.update({
         where: { id },
         data: updateData
      })

      if (imageFile) {
         await saveProductImageFile(updateData.imagePath, imageFile)
         if (oldRecord?.imagePath) {
            await safeDeleteProductImageFile(oldRecord.imagePath)
         }
      }

      return updatedProduct
   },

   async delete(id) {
      const record = await prisma.product.findUniqueOrThrow({ where: { id } })

      const deletedRecord = await prisma.product.delete({ where: { id } })

      if (record.imagePath) {
         await safeDeleteProductImageFile(record.imagePath)
      }

      return deletedRecord
   }
}
