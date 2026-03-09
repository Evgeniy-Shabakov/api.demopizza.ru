/*
  Warnings:

  - Added the required column `balanceAfter` to the `bonus_coins_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bonus_coins_transactions" ADD COLUMN     "balanceAfter" DECIMAL(12,2) NOT NULL;
