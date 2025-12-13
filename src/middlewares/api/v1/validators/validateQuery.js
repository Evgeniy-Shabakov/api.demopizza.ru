import { z } from 'zod'

function validateIncludeQueryString(includeString, validArray) {
   const arr = includeString.split(',')
   return arr.every(item => validArray.includes(item))
}

//доступна запись вида sort=id sort=id,asc sort=id,desc
function validateSortQueryString(sortString, validArray) {
   const arr = sortString.split(',')
   if (arr.length > 2) return false

   const check1 = validArray.includes(arr[0])
   const check2 = !arr[1] || ['asc', 'desc'].includes(arr[1])

   return check1 && check2
}

function createQueryValidationSchema(queryValidationData) {
   return z.object({
      include: z
         .string()
         .refine(
            val => validateIncludeQueryString(val, queryValidationData.include),
            `Query параметр include должен содержать только допустимые значения: ${queryValidationData.include?.join(', ')}`
         )
         .optional(),

      sort: z
         .string()
         .refine(
            val => validateSortQueryString(val, queryValidationData.sort),
            `Query параметр sort должен содержать только допустимые значения: ${queryValidationData.sort?.join(', ')}`
         )
         .optional(),
   }).strict()
}

export function validateQuery(queryValidationData) {
   return function (req, res, next) {
      try {
         createQueryValidationSchema(queryValidationData).parse(req.query)

         req.relations = req.query.include?.split(',')

         req.relations = req.relations?.reduce((acc, rel) => ({ ...acc, [rel]: true }), {})

         if (req.query.sort) {
            req.sort = { [req.query.sort.split(',')[0]]: req.query.sort?.split(',')[1] || 'asc' }
         }

         next()
      } catch (error) {
         next(error)
      }
   }
}