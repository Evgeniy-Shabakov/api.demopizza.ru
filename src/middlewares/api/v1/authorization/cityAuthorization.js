import { PERMISSIONS } from "#constants/api/v1/permissions.js"
import { baseAutorization } from "./baseAuthorization.js"

export const cityAuthorization = baseAutorization((user) => {

   if (user.hasAnyRole(PERMISSIONS.CITY_ALL_ACTIONS)) return true

   return false
})