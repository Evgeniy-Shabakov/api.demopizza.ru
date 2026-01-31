import dotenv from 'dotenv'
import { ALL_ROUTE_PERMISSIONS } from "./permissions/allRoutePermissions.js"
import {
   EMPLOYEES_ROUTE_PERMISSIONS,
   PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS,
   ORDERS_ROUTE_PERMISSIONS
} from "./permissions/modelsRoutePermissions.js"

dotenv.config()  // Загружаем переменные окружения из .env

export const MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL = 500 // <=500 для управления в рамках одного ресторана

export const ROLE = Object.freeze({
   SUPER_ADMIN: {
      ID: parseInt(process.env.ROLE_SUPER_ADMIN_ID),
      NAME: 'super-admin',
      EMPLOYEES_CONTROL_LEVEL: 999999999
   },
   OWNER: {
      ID: 1,
      NAME: 'Владелец',
      DESCRIPTION: 'Доступны все возможности',
      EMPLOYEES_CONTROL_LEVEL: 1000,
      ROUTE_PERMISSIONS: ALL_ROUTE_PERMISSIONS
   },
   MANAGER_GENERAL: {
      ID: 2,
      NAME: 'Управляющий всеми ресторанами',
      DESCRIPTION: 'Доступны все возможности, кроме манипуляций с данными владельца и данными других управляющих всеми ресторанами',
      EMPLOYEES_CONTROL_LEVEL: 900,
      ROUTE_PERMISSIONS: ALL_ROUTE_PERMISSIONS
   },
   MANAGER_RESTAURANT: {
      ID: 3,
      NAME: 'Управляющий рестораном',
      DESCRIPTION: 'Доступны все возможности в рамках назначенного ресторана',
      EMPLOYEES_CONTROL_LEVEL: MAX_RESTAURANT_EMPLOYEES_CONTROL_LEVEL, 
      ROUTE_PERMISSIONS: [
         ...Object.values(EMPLOYEES_ROUTE_PERMISSIONS),
         ...Object.values(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS),
         ...Object.values(ORDERS_ROUTE_PERMISSIONS)
      ]
   },
   ADMINISTRATOR_RESTAURANT: {
      ID: 4,
      NAME: 'Администратор ресторана',
      DESCRIPTION: 'Доступно изменение статусов заказов и изменение стоп-листа',
      EMPLOYEES_CONTROL_LEVEL: 400,
      ROUTE_PERMISSIONS: [
         ...Object.values(PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS),
         ...Object.values(ORDERS_ROUTE_PERMISSIONS)
      ]
   },
   COURIER: {
      ID: 5,
      NAME: 'Курьер',
      DESCRIPTION: 'Доступно изменение статусов заказов на выполнено',
      EMPLOYEES_CONTROL_LEVEL: 100,
      ROUTE_PERMISSIONS: [
         ORDERS_ROUTE_PERMISSIONS.GET_ALL,
         ORDERS_ROUTE_PERMISSIONS.UPDATE,
      ]
   },
})