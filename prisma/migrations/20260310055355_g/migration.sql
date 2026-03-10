/*
  Warnings:

  - You are about to drop the column `is_bonus_coins_allowed` on the `companies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "is_bonus_coins_allowed",
ADD COLUMN     "is_bonus_coins_enabled" BOOLEAN NOT NULL DEFAULT false;
