import { ROLE } from "#constants/api/v1/roles.js"

export const PERMISSIONS = Object.freeze({
   CITY_ALL_ACTIONS: [
      ROLE.DIRECTOR_GENERAL,
      ROLE.DEPUTY_GENERAL_DIRECTOR,
      ROLE.ADMINISTRATOR_GENERAL
   ],
})