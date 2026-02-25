-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "user_id" INTEGER,
    "city_id" INTEGER,
    "delivery_zone_id" INTEGER,
    "restaurant_id" INTEGER,
    "employee_id" INTEGER,
    "courier_id" INTEGER,
    "user_address_id" INTEGER,
    "order_type" TEXT NOT NULL,
    "table_number" TEXT,
    "car_number" TEXT,
    "pack_takeaway" BOOLEAN,
    "leave_at_the_door" BOOLEAN,
    "dont_ring_doorbell" BOOLEAN,
    "order_status" TEXT NOT NULL,
    "total_products_price" DECIMAL(12,2) NOT NULL,
    "delivery_price" DECIMAL(12,2) NOT NULL,
    "total_price" DECIMAL(12,2) NOT NULL,
    "payment_type" TEXT NOT NULL,
    "banknote_for_change" DECIMAL(12,2),
    "payment_status" TEXT NOT NULL,
    "user_comment" TEXT,
    "responsible_employee_comment" TEXT,
    "options" JSONB,
    "snapshot" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "orders_user_id_idx" ON "orders"("user_id");

-- CreateIndex
CREATE INDEX "orders_city_id_idx" ON "orders"("city_id");

-- CreateIndex
CREATE INDEX "orders_restaurant_id_idx" ON "orders"("restaurant_id");

-- CreateIndex
CREATE INDEX "orders_employee_id_idx" ON "orders"("employee_id");

-- CreateIndex
CREATE INDEX "orders_courier_id_idx" ON "orders"("courier_id");

-- CreateIndex
CREATE INDEX "orders_order_type_idx" ON "orders"("order_type");

-- CreateIndex
CREATE INDEX "orders_order_status_idx" ON "orders"("order_status");

-- CreateIndex
CREATE INDEX "orders_payment_status_idx" ON "orders"("payment_status");

-- CreateIndex
CREATE INDEX "orders_created_at_idx" ON "orders"("created_at");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_delivery_zone_id_fkey" FOREIGN KEY ("delivery_zone_id") REFERENCES "delivery_zones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_courier_id_fkey" FOREIGN KEY ("courier_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_address_id_fkey" FOREIGN KEY ("user_address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
