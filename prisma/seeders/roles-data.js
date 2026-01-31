import { ROLE } from '#constants/api/v1/roles.js'

export const roles = [
   {
      id: ROLE.SUPER_ADMIN.ID,
      name: ROLE.SUPER_ADMIN.NAME,
      description: ROLE.SUPER_ADMIN.DESCRIPTION,
      employeesControlLevel: ROLE.SUPER_ADMIN.EMPLOYEES_CONTROL_LEVEL
   },
   {
      id: ROLE.OWNER.ID,
      name: ROLE.OWNER.NAME,
      description: ROLE.OWNER.DESCRIPTION,
      employeesControlLevel: ROLE.OWNER.EMPLOYEES_CONTROL_LEVEL
   },
   {
      id: ROLE.MANAGER_GENERAL.ID,
      name: ROLE.MANAGER_GENERAL.NAME,
      description: ROLE.MANAGER_GENERAL.DESCRIPTION,
      employeesControlLevel: ROLE.MANAGER_GENERAL.EMPLOYEES_CONTROL_LEVEL
   },
   {
      id: ROLE.MANAGER_RESTAURANT.ID,
      name: ROLE.MANAGER_RESTAURANT.NAME,
      description: ROLE.MANAGER_RESTAURANT.DESCRIPTION,
      employeesControlLevel: ROLE.MANAGER_RESTAURANT.EMPLOYEES_CONTROL_LEVEL
   },
   {
      id: ROLE.ADMINISTRATOR_RESTAURANT.ID,
      name: ROLE.ADMINISTRATOR_RESTAURANT.NAME,
      description: ROLE.ADMINISTRATOR_RESTAURANT.DESCRIPTION,
      employeesControlLevel: ROLE.ADMINISTRATOR_RESTAURANT.EMPLOYEES_CONTROL_LEVEL
   },
   {
      id: ROLE.COURIER.ID,
      name: ROLE.COURIER.NAME,
      description: ROLE.COURIER.DESCRIPTION,
      employeesControlLevel: ROLE.COURIER.EMPLOYEES_CONTROL_LEVEL
   },
]