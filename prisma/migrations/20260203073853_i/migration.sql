/*
  Warnings:

  - You are about to drop the column `employee_id` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_employee_id_fkey";

-- DropIndex
DROP INDEX "orders_employee_id_idx";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "employee_id",
ADD COLUMN     "responsible_employee_id" INTEGER;

-- CreateIndex
CREATE INDEX "orders_responsible_employee_id_idx" ON "orders"("responsible_employee_id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_responsible_employee_id_fkey" FOREIGN KEY ("responsible_employee_id") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
