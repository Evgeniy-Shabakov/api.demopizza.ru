-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bonus_coins" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "bonus_coins_transactions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "reason" VARCHAR(255) NOT NULL,
    "orderId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bonus_coins_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bonus_coins_transactions_orderId_key" ON "bonus_coins_transactions"("orderId");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_userId_idx" ON "bonus_coins_transactions"("userId");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_orderId_idx" ON "bonus_coins_transactions"("orderId");

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
