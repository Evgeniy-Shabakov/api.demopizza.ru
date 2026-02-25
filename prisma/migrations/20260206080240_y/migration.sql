/*
  Warnings:

  - You are about to drop the column `order_type` on the `orders` table. All the data in the column will be lost.
  - Added the required column `order_type_id` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "orders_order_type_idx";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "order_type",
ADD COLUMN     "order_type_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "orders_order_type_id_idx" ON "orders"("order_type_id");
