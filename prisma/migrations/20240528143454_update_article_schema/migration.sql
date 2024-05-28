/*
  Warnings:

  - You are about to drop the column `image` on the `Articles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "image",
ADD COLUMN     "imageUrl" TEXT;
