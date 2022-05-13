/*
  Warnings:

  - Changed the type of `definedStatus` on the `Point` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Point" DROP COLUMN "definedStatus",
ADD COLUMN     "definedStatus" TEXT NOT NULL;
