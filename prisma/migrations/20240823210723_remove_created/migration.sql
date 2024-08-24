/*
  Warnings:

  - You are about to drop the column `created_for` on the `Contatct` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contatct" DROP CONSTRAINT "Contatct_created_for_fkey";

-- AlterTable
ALTER TABLE "Contatct" DROP COLUMN "created_for";
