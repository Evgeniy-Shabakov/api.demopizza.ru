/*
  Warnings:

  - You are about to drop the column `content` on the `legal_documents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "legal_documents" DROP COLUMN "content",
ADD COLUMN     "html_content" TEXT,
ADD COLUMN     "link" VARCHAR(500);
