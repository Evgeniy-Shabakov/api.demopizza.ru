import {
   COUNTRIES_ROUTE_PERMISSIONS,
   CITIES_ROUTE_PERMISSIONS,
   RESTAURANTS_ROUTE_PERMISSIONS,
   RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS,
   DELIVERY_ZONES_ROUTE_PERMISSIONS,
   CATEGORIES_ROUTE_PERMISSIONS,
   DESIGN_ROUTE_PERMISSIONS,
   LEGAL_DOCUMENTS_ROUTE_PERMISSIONS,
   PRODUCTS_ROUTE_PERMISSIONS,
   PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS,
   ORDERS_ROUTE_PERMISSIONS,
   EMPLOYEES_ROUTE_PERMISSIONS,
   PROMOCODE_ROUTE_PERMISSIONS,
   COMPANY_ROUTE_PERMISSIONS
} from '#constants/v1/permissions/models-route-permissions.js'

export const ROUTE_AUTHORIZATION_MAP = new Map([
   // ── countries ──
   ['GET /admin/countries',        COUNTRIES_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/countries/:id',    COUNTRIES_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/countries',       COUNTRIES_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/countries/:id',    COUNTRIES_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/countries/:id', COUNTRIES_ROUTE_PERMISSIONS.DELETE],

   // ── cities ──
   ['GET /admin/cities',           CITIES_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/cities/:id',       CITIES_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/cities',          CITIES_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/cities/:id',       CITIES_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/cities/:id',    CITIES_ROUTE_PERMISSIONS.DELETE],

   // ── restaurant-schedules ──
   ['GET /admin/restaurant-schedules',        RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/restaurant-schedules/:id',    RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/restaurant-schedules',       RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/restaurant-schedules/:id',    RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/restaurant-schedules/:id', RESTAURANT_SCHEDULES_ROUTE_PERMISSIONS.DELETE],

   // ── restaurants ──
   ['GET /admin/restaurants',        RESTAURANTS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/restaurants/:id',    RESTAURANTS_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/restaurants',       RESTAURANTS_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/restaurants/:id',    RESTAURANTS_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/restaurants/:id', RESTAURANTS_ROUTE_PERMISSIONS.DELETE],

   // ── delivery-zones ──
   ['GET /admin/delivery-zones',        DELIVERY_ZONES_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/delivery-zones/:id',    DELIVERY_ZONES_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/delivery-zones',       DELIVERY_ZONES_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/delivery-zones/:id',    DELIVERY_ZONES_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/delivery-zones/:id', DELIVERY_ZONES_ROUTE_PERMISSIONS.DELETE],

   // ── categories ──
   ['GET /admin/categories',        CATEGORIES_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/categories/:id',    CATEGORIES_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/categories',       CATEGORIES_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/categories/:id',    CATEGORIES_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/categories/:id', CATEGORIES_ROUTE_PERMISSIONS.DELETE],

   // ── products ──
   ['GET /admin/products',        PRODUCTS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/products/:id',    PRODUCTS_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/products',       PRODUCTS_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/products/:id',    PRODUCTS_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/products/:id', PRODUCTS_ROUTE_PERMISSIONS.DELETE],

   // ── product-restaurants ──
   ['GET /admin/product-restaurants',        PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/product-restaurants/:id',    PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/product-restaurants',       PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/product-restaurants/:id',    PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/product-restaurants/:id', PRODUCT_RESTAURANTS_ROUTE_PERMISSIONS.DELETE],

   // ── designs ──
   ['GET /admin/designs',        DESIGN_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/designs/:id',    DESIGN_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/designs',       DESIGN_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/designs/:id',    DESIGN_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/designs/:id', DESIGN_ROUTE_PERMISSIONS.DELETE],

   // ── legal-documents ──
   ['GET /admin/legal-documents',        LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/legal-documents/:id',    LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/legal-documents',       LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/legal-documents/:id',    LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/legal-documents/:id', LEGAL_DOCUMENTS_ROUTE_PERMISSIONS.DELETE],

   // ── orders ──
   ['GET /admin/orders',                  ORDERS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/orders/active',           ORDERS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/orders/count',            ORDERS_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/orders/:id',              ORDERS_ROUTE_PERMISSIONS.GET_ONE],
   ['PATCH /admin/orders/:id',            ORDERS_ROUTE_PERMISSIONS.UPDATE],
   ['PATCH /admin/orders/:id/next-status',      ORDERS_ROUTE_PERMISSIONS.UPDATE],
   ['PATCH /admin/orders/:id/previous-status',  ORDERS_ROUTE_PERMISSIONS.UPDATE],

   // ── employees ──
   ['GET /admin/employees',                     EMPLOYEES_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/employees/:id',                 EMPLOYEES_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/employees',                    EMPLOYEES_ROUTE_PERMISSIONS.CREATE],
   ['PUT /admin/employees/:id',                 EMPLOYEES_ROUTE_PERMISSIONS.UPDATE],
   ['PATCH /admin/employees/:id/change-password', EMPLOYEES_ROUTE_PERMISSIONS.UPDATE],
   ['DELETE /admin/employees/:id',              EMPLOYEES_ROUTE_PERMISSIONS.DELETE],

   // ── promocodes ──
   ['GET /admin/promocodes',      PROMOCODE_ROUTE_PERMISSIONS.GET_ALL],
   ['GET /admin/promocodes/:id',  PROMOCODE_ROUTE_PERMISSIONS.GET_ONE],
   ['POST /admin/promocodes',     PROMOCODE_ROUTE_PERMISSIONS.CREATE],
   ['PATCH /admin/promocodes/:id', PROMOCODE_ROUTE_PERMISSIONS.UPDATE],

   // ── company ──
   ['GET /admin/company', COMPANY_ROUTE_PERMISSIONS.GET_ONE],
   ['PUT /admin/company', COMPANY_ROUTE_PERMISSIONS.UPDATE],
])
