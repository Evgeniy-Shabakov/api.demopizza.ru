import { PrismaClient } from '@prisma/client'

import { countries } from './countries-data.js'
import { cities } from './cities-data.js'
import { restaurantSchedules } from './restaurant-cshedules-data.js'
import { restaurants } from './restaurants-data.js'
import { addresses } from './addresses-data.js'
import { deliveryZones } from './delivery-zones-data.js'
import { products } from './producs-data.js'
import { categories } from './categories-data.js'
import { users } from './users-data.js'
import { roles } from './roles-data.js'
import { userRoles } from './user-role-data.js'

const prisma = new PrismaClient()

async function runAllSeeders() {
   await runModelSeeder('country', countries)
   await runModelSeeder('city', cities)
   await runModelSeeder('restaurantSchedule', restaurantSchedules)
   await runModelSeeder('restaurant', restaurants)
   await runModelSeeder('address', addresses)
   await runModelSeeder('deliveryZone', deliveryZones)
   await runModelSeeder('category', categories)
   await runModelSeeder('product', products)
   await runModelSeeder('user', users)
   await runModelSeeder('role', roles)
   await runModelSeeder('userRole', userRoles)
}

async function runModelSeeder(modelName, items) {
   console.log(modelName + ': начинаем сидирование...')

   for (const item of items) {
      await prisma[modelName].create({
         data: item,
      })
   }
   console.log(modelName + `: cидирование завершено, добавлено ${items.length} записей`)
}
async function main() {
   try {
      console.log('🚀 Запуск всех сидеров...')

      await runAllSeeders()

      console.log('✅ Все сидеры успешно выполнены!')
   } catch (error) {
      console.error('❌ Ошибка при выполнении сидеров:', error)
      throw error
   } finally {
      await prisma.$disconnect()
   }
}

main()
   .catch((e) => {
      console.error(e)
      process.exit(1)
   })