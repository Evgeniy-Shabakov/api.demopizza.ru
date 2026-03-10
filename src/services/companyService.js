import { prisma } from '#services/prismaClient.js'
import { nodeCache } from '#services/nodeCache.js'

const COMPANY_CACHE_KEY = 'company:main'

export async function getCompany() {
   let company = nodeCache.get(COMPANY_CACHE_KEY)

   if (!company) {
      company = await prisma.company.findFirstOrThrow()
      nodeCache.set(COMPANY_CACHE_KEY, company, 3600) // 1 час
   }

   return company
}

export function invalidateCompanyCache() {
  nodeCache.del(COMPANY_CACHE_KEY)
}