import {
   SUPER_ADMIN, SUPER_ADMIN_DESCRIPTION,
   DIRECTOR, DIRECTOR_DESCRIPTION,
   ADMINISTRATOR, ADMINISTRATOR_DESCRIPTION,
   MENU_MANAGER, MENU_MANAGER_DESCRIPTION,
   ORDER_MANAGER, ORDER_MANAGER_DESCRIPTION,
   COURIER, COURIER_DESCRIPTION
} from '#constants/api/v1/roles.js'

export const roles = [
   {
      name: SUPER_ADMIN,
      description: SUPER_ADMIN_DESCRIPTION
   },
   {
      name: DIRECTOR,
      description: DIRECTOR_DESCRIPTION
   },
   {
      name: ADMINISTRATOR,
      description: ADMINISTRATOR_DESCRIPTION
   },
   {
      name: MENU_MANAGER,
      description: MENU_MANAGER_DESCRIPTION
   },
   {
      name: ORDER_MANAGER,
      description: ORDER_MANAGER_DESCRIPTION
   },
   {
      name: COURIER,
      description: COURIER_DESCRIPTION
   },
]