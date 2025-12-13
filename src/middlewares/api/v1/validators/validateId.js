import { z } from 'zod'

const idSchema = z.coerce.number().int().positive()

export function validateId(req, res, next) {
   try {
      req.params.id = idSchema.parse(req.params.id)
      next()
   } catch (error) {
      next(error)
   }
}