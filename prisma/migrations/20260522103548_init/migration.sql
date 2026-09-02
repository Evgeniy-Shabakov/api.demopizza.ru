-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "cityId" INTEGER NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "house" VARCHAR(10) NOT NULL,
    "corps" VARCHAR(10),
    "flat" VARCHAR(10),
    "entrance" INTEGER,
    "floor" INTEGER,
    "entranceCode" VARCHAR(20),
    "comment" VARCHAR(500),
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "address_as_string" VARCHAR(500),
    "external_api_data" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bonus_coins_transactions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "balance_after" DECIMAL(12,2) NOT NULL,
    "reason" VARCHAR(255) NOT NULL,
    "order_id" INTEGER,
    "promocode_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bonus_coins_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "position" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "country_id" INTEGER NOT NULL,
    "min_order_value_for_delivery_by_default" DECIMAL(12,2) DEFAULT 0,
    "delivery_price_by_default" DECIMAL(12,2) DEFAULT 0,
    "order_value_for_free_delivery_by_default" DECIMAL(12,2),
    "map_iframe" VARCHAR(2000),
    "geojson" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "brand_name" VARCHAR(255) NOT NULL,
    "tagline" VARCHAR(255),
    "logo_path" VARCHAR(1000),
    "favicon_path" VARCHAR(1000),
    "phone_for_orders" VARCHAR(30),
    "about_us" TEXT,
    "legal_data" JSONB,
    "links_social" JSONB,
    "options" JSONB,
    "contacts" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_zones" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "city_id" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "min_order_value_for_delivery" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "delivery_price" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "order_value_for_free_delivery" DECIMAL(12,2),
    "geojson_feature" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "delivery_zones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "designs" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "settings" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "designs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "phone_verified_at" TIMESTAMP(3),
    "email" VARCHAR(255),
    "email_verified_at" TIMESTAMP(3),
    "password" VARCHAR(255),
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "middle_name" VARCHAR(255),
    "job_title" VARCHAR(255),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_refresh_tokens" (
    "id" SERIAL NOT NULL,
    "token" VARCHAR(512) NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_revoked" BOOLEAN NOT NULL DEFAULT false,
    "user_agent" VARCHAR(2000),
    "ip_address" VARCHAR(2000),
    "device_name" VARCHAR(2000),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_role" (
    "id" SERIAL NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,
    "restaurant_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "legal_documents" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "file_path" VARCHAR(1000),
    "link" VARCHAR(1000),
    "html_content" TEXT,
    "description" VARCHAR(2000),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "legal_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(30),
    "user_id" INTEGER,
    "city_id" INTEGER NOT NULL,
    "delivery_zone_id" INTEGER,
    "restaurant_id" INTEGER NOT NULL,
    "responsible_employee_id" INTEGER,
    "courier_id" INTEGER,
    "address_id" INTEGER,
    "payment_id" INTEGER,
    "order_type_id" INTEGER NOT NULL,
    "table_number" VARCHAR(20),
    "car_number" VARCHAR(20),
    "pack_takeaway" BOOLEAN,
    "leave_at_the_door" BOOLEAN,
    "dont_ring_doorbell" BOOLEAN,
    "order_status_id" INTEGER NOT NULL,
    "total_products_price" DECIMAL(12,2) NOT NULL,
    "delivery_price" DECIMAL(12,2) NOT NULL,
    "bonus_coins_paid" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "total_price" DECIMAL(12,2) NOT NULL,
    "bonus_coins_earned" INTEGER NOT NULL DEFAULT 0,
    "payment_type_id" INTEGER NOT NULL,
    "banknote_for_change" INTEGER,
    "payment_status_id" INTEGER NOT NULL,
    "user_comment" VARCHAR(2000),
    "responsible_employee_comment" VARCHAR(2000),
    "options" JSONB,
    "snapshot" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_product" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "provider" VARCHAR(255) NOT NULL,
    "provider_payment_id" TEXT,
    "status" VARCHAR(255) NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "currency" VARCHAR(50) NOT NULL DEFAULT 'RUB',
    "description" VARCHAR(500),
    "return_url" VARCHAR(2048),
    "payment_url" VARCHAR(2048),
    "paid_at" TIMESTAMP(3),
    "confirmed_at" TIMESTAMP(3),
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "image_path" VARCHAR(1000),
    "description_short" VARCHAR(500),
    "description_full" VARCHAR(2000),
    "price_default" DECIMAL(12,2) NOT NULL,
    "bonus_coins_default" DECIMAL(12,2),
    "position_in_category" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "composition" VARCHAR(2000),
    "weight" INTEGER,
    "calories" INTEGER,
    "proteins" DOUBLE PRECISION,
    "fats" DOUBLE PRECISION,
    "carbohydrates" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_restaurant" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "is_in_stop_list" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promocodes" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "bonus_coins" DECIMAL(12,2) NOT NULL,
    "description" VARCHAR(255),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "employee_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promocodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurants" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "city_id" INTEGER NOT NULL,
    "restaurant_schedule_id" INTEGER NOT NULL,
    "address" JSONB,
    "delivery_to_address_available" BOOLEAN NOT NULL DEFAULT true,
    "pick_up_at_counter_available" BOOLEAN NOT NULL DEFAULT true,
    "pick_up_at_car_window_available" BOOLEAN NOT NULL DEFAULT false,
    "at_restaurant_at_counter_available" BOOLEAN NOT NULL DEFAULT false,
    "at_restaurant_to_table_available" BOOLEAN NOT NULL DEFAULT false,
    "delivery_to_restaurant_parking_available" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurant_schedules" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "monday_open_time" VARCHAR(255),
    "monday_close_time" VARCHAR(255),
    "monday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "tuesday_open_time" VARCHAR(255),
    "tuesday_close_time" VARCHAR(255),
    "tuesday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "wednesday_open_time" VARCHAR(255),
    "wednesday_close_time" VARCHAR(255),
    "wednesday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "thursday_open_time" VARCHAR(255),
    "thursday_close_time" VARCHAR(255),
    "thursday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "friday_open_time" VARCHAR(255),
    "friday_close_time" VARCHAR(255),
    "friday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "saturday_open_time" VARCHAR(255),
    "saturday_close_time" VARCHAR(255),
    "saturday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "sunday_open_time" VARCHAR(255),
    "sunday_close_time" VARCHAR(255),
    "sunday_is_open" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurant_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(2000),
    "employees_control_level" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "phone" VARCHAR(30) NOT NULL,
    "phone_verified_at" TIMESTAMP(3),
    "email" VARCHAR(255),
    "email_verified_at" TIMESTAMP(3),
    "password" VARCHAR(255),
    "nickname" VARCHAR(255),
    "bonus_coins" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_refresh_tokens" (
    "id" SERIAL NOT NULL,
    "token" VARCHAR(512) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "is_revoked" BOOLEAN NOT NULL DEFAULT false,
    "user_agent" VARCHAR(2000),
    "ip_address" VARCHAR(2000),
    "device_name" VARCHAR(2000),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_refresh_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "addresses_userId_idx" ON "addresses"("userId");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_userId_idx" ON "bonus_coins_transactions"("userId");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_order_id_idx" ON "bonus_coins_transactions"("order_id");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_promocode_id_idx" ON "bonus_coins_transactions"("promocode_id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "companies_name_key" ON "companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_name_key" ON "countries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "designs_name_key" ON "designs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_phone_key" ON "employees"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employee_refresh_tokens_token_key" ON "employee_refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "employee_refresh_tokens_token_idx" ON "employee_refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "employee_refresh_tokens_employee_id_idx" ON "employee_refresh_tokens"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_role_employee_id_role_id_restaurant_id_key" ON "employee_role"("employee_id", "role_id", "restaurant_id");

-- CreateIndex
CREATE UNIQUE INDEX "legal_documents_name_key" ON "legal_documents"("name");

-- CreateIndex
CREATE UNIQUE INDEX "orders_payment_id_key" ON "orders"("payment_id");

-- CreateIndex
CREATE INDEX "orders_user_id_idx" ON "orders"("user_id");

-- CreateIndex
CREATE INDEX "orders_city_id_idx" ON "orders"("city_id");

-- CreateIndex
CREATE INDEX "orders_delivery_zone_id_idx" ON "orders"("delivery_zone_id");

-- CreateIndex
CREATE INDEX "orders_restaurant_id_idx" ON "orders"("restaurant_id");

-- CreateIndex
CREATE INDEX "orders_responsible_employee_id_idx" ON "orders"("responsible_employee_id");

-- CreateIndex
CREATE INDEX "orders_courier_id_idx" ON "orders"("courier_id");

-- CreateIndex
CREATE INDEX "orders_order_type_id_idx" ON "orders"("order_type_id");

-- CreateIndex
CREATE INDEX "orders_order_status_id_idx" ON "orders"("order_status_id");

-- CreateIndex
CREATE INDEX "orders_payment_status_id_idx" ON "orders"("payment_status_id");

-- CreateIndex
CREATE INDEX "orders_created_at_idx" ON "orders"("created_at");

-- CreateIndex
CREATE INDEX "order_product_order_id_idx" ON "order_product"("order_id");

-- CreateIndex
CREATE INDEX "order_product_product_id_idx" ON "order_product"("product_id");

-- CreateIndex
CREATE INDEX "payments_status_idx" ON "payments"("status");

-- CreateIndex
CREATE UNIQUE INDEX "payments_provider_provider_payment_id_key" ON "payments"("provider", "provider_payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_restaurant_product_id_restaurant_id_key" ON "product_restaurant"("product_id", "restaurant_id");

-- CreateIndex
CREATE UNIQUE INDEX "promocodes_code_key" ON "promocodes"("code");

-- CreateIndex
CREATE INDEX "promocodes_employee_id_idx" ON "promocodes"("employee_id");

-- CreateIndex
CREATE INDEX "promocodes_user_id_idx" ON "promocodes"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_name_key" ON "restaurants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_schedules_name_key" ON "restaurant_schedules"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_refresh_tokens_token_key" ON "user_refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "user_refresh_tokens_token_idx" ON "user_refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "user_refresh_tokens_user_id_idx" ON "user_refresh_tokens"("user_id");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_promocode_id_fkey" FOREIGN KEY ("promocode_id") REFERENCES "promocodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_zones" ADD CONSTRAINT "delivery_zones_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_zones" ADD CONSTRAINT "delivery_zones_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_refresh_tokens" ADD CONSTRAINT "employee_refresh_tokens_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_role" ADD CONSTRAINT "employee_role_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_role" ADD CONSTRAINT "employee_role_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_role" ADD CONSTRAINT "employee_role_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivery_zone_id_fkey" FOREIGN KEY ("delivery_zone_id") REFERENCES "delivery_zones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_responsible_employee_id_fkey" FOREIGN KEY ("responsible_employee_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_courier_id_fkey" FOREIGN KEY ("courier_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_product" ADD CONSTRAINT "order_product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_restaurant" ADD CONSTRAINT "product_restaurant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_restaurant" ADD CONSTRAINT "product_restaurant_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promocodes" ADD CONSTRAINT "promocodes_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promocodes" ADD CONSTRAINT "promocodes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_restaurant_schedule_id_fkey" FOREIGN KEY ("restaurant_schedule_id") REFERENCES "restaurant_schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_refresh_tokens" ADD CONSTRAINT "user_refresh_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
