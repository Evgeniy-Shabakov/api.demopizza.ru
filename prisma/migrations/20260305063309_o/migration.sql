-- DropForeignKey
ALTER TABLE "bonus_coins_transactions" DROP CONSTRAINT "bonus_coins_transactions_orderId_fkey";

-- DropIndex
DROP INDEX "bonus_coins_transactions_orderId_idx";
