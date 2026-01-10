import { PERMISSIONS } from "#constants/api/v1/permissions.js"
import { baseAutorization } from "./baseAuthorization.js"

export const generalAuthorization = baseAutorization((req) => {

   if (req.user.hasAnyRole(PERMISSIONS.GENERAL)) return true

   return false
})