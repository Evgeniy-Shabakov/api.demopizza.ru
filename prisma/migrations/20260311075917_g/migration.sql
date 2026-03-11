/*
  Warnings:

  - You are about to drop the column `balanceAfter` on the `bonus_coins_transactions` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `bonus_coins_transactions` table. All the data in the column will be lost.
  - Added the required column `balance_after` to the `bonus_coins_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bonus_coins_transactions" DROP CONSTRAINT "bonus_coins_transactions_orderId_fkey";

-- DropIndex
DROP INDEX "bonus_coins_transactions_orderId_idx";

-- AlterTable
ALTER TABLE "bonus_coins_transactions" DROP COLUMN "balanceAfter",
DROP COLUMN "orderId",
ADD COLUMN     "balance_after" DECIMAL(12,2) NOT NULL,
ADD COLUMN     "order_id" INTEGER,
ADD COLUMN     "promocode_id" INTEGER;

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "promocodes" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255),
    "bonus_coins" DECIMAL(12,2) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "employee_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "promocodes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "promocodes_code_key" ON "promocodes"("code");

-- CreateIndex
CREATE INDEX "promocodes_employee_id_idx" ON "promocodes"("employee_id");

-- CreateIndex
CREATE INDEX "promocodes_user_id_idx" ON "promocodes"("user_id");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_order_id_idx" ON "bonus_coins_transactions"("order_id");

-- CreateIndex
CREATE INDEX "bonus_coins_transactions_promocode_id_idx" ON "bonus_coins_transactions"("promocode_id");

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bonus_coins_transactions" ADD CONSTRAINT "bonus_coins_transactions_promocode_id_fkey" FOREIGN KEY ("promocode_id") REFERENCES "promocodes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promocodes" ADD CONSTRAINT "promocodes_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promocodes" ADD CONSTRAINT "promocodes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
