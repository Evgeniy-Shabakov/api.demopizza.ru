-- DropIndex
DROP INDEX "bonus_coins_transactions_orderId_key";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "bonus_coins_earned" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "bonus_coins_paid" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "bonus_coins_default" INTEGER;
