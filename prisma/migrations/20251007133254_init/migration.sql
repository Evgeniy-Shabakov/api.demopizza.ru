/*
  Warnings:

  - You are about to drop the column `title` on the `restaurant_schedules` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `restaurant_schedules` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `restaurant_schedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."restaurant_schedules_title_key";

-- AlterTable
ALTER TABLE "public"."restaurant_schedules" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "restaurant_schedules_name_key" ON "public"."restaurant_schedules"("name");
