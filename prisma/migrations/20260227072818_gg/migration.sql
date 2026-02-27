/*
  Warnings:

  - You are about to alter the column `map_iframe` on the `cities` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2000)`.
  - You are about to alter the column `name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(255)`.
  - You are about to alter the column `token` on the `refresh_tokens` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(512)`.
  - You are about to alter the column `name` on the `restaurant_schedules` table. The data in that column could be lost. The data in that column will be cast from `VarChar(2000)` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "map_iframe" SET DATA TYPE VARCHAR(2000);

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "refresh_tokens" ALTER COLUMN "token" SET DATA TYPE VARCHAR(512);

-- AlterTable
ALTER TABLE "restaurant_schedules" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);
