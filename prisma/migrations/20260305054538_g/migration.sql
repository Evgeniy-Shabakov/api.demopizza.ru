-- AlterTable
ALTER TABLE "bonus_coins_transactions" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "bonus_coins_paid" SET DEFAULT 0,
ALTER COLUMN "bonus_coins_paid" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "bonus_coins_default" SET DATA TYPE DECIMAL(12,2);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "bonus_coins" SET DEFAULT 0,
ALTER COLUMN "bonus_coins" SET DATA TYPE DECIMAL(12,2);
