-- CreateTable
CREATE TABLE "public"."restaurants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "restaurant_schedule_id" INTEGER NOT NULL,
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

-- AddForeignKey
ALTER TABLE "public"."restaurants" ADD CONSTRAINT "restaurants_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "public"."cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."restaurants" ADD CONSTRAINT "restaurants_restaurant_schedule_id_fkey" FOREIGN KEY ("restaurant_schedule_id") REFERENCES "public"."restaurant_schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
