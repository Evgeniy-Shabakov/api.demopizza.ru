/*
  Warnings:

  - Made the column `city_id` on table `orders` required. This step will fail if there are existing NULL values in that column.
  - Made the column `restaurant_id` on table `orders` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "city_id" SET NOT NULL,
ALTER COLUMN "restaurant_id" SET NOT NULL;
