/*
  Warnings:

  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `cities` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `countries` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `delivery_zones` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `designs` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `email` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `first_name` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `last_name` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `middle_name` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `job_title` on the `employees` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `number` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `table_number` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `car_number` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `payment_type` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `payment_status` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `user_comment` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `responsible_employee_comment` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `image_path` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.
  - You are about to alter the column `description_short` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(500)`.
  - You are about to alter the column `description_full` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `composition` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `token` on the `refresh_tokens` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `user_agent` on the `refresh_tokens` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `ip_address` on the `refresh_tokens` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `device_name` on the `refresh_tokens` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `name` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `monday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `monday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `tuesday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `tuesday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `wednesday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `wednesday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `thursday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `thursday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `friday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `friday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `saturday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `saturday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `sunday_open_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `sunday_close_time` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `restaurants` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `name` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `description` on the `roles` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `nickname` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "addresses" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "countries" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "delivery_zones" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "designs" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "middle_name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "job_title" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "number" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "table_number" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "car_number" SET DATA TYPE VARCHAR(20),
ALTER COLUMN "payment_type" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "payment_status" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "user_comment" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "responsible_employee_comment" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "image_path" SET DATA TYPE VARCHAR(1000),
ALTER COLUMN "description_short" SET DATA TYPE VARCHAR(500),
ALTER COLUMN "description_full" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "composition" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "refresh_tokens" ALTER COLUMN "token" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "user_agent" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "ip_address" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "device_name" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "restaurant_schedules" ALTER COLUMN "name" SET DATA TYPE VARCHAR(2000),
ALTER COLUMN "monday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "monday_close_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "tuesday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "tuesday_close_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "wednesday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "wednesday_close_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "thursday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "thursday_close_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "friday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "friday_close_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "saturday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "saturday_close_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "sunday_open_time" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "sunday_close_time" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "restaurants" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "nickname" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "legal_documents" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "file_path" VARCHAR(1000) NOT NULL,
    "content" TEXT,
    "description" VARCHAR(2000),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "legal_documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "legal_documents_name_key" ON "legal_documents"("name");
