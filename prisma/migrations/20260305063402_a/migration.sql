-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "bonus_coins_paid" DECIMAL(12,2) NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_orderId_idx" ON "bonus_coins_transactions"("orderId");

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
