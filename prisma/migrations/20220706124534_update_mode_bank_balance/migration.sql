/*
  Warnings:

  - You are about to drop the column `value` on the `BankBalanceHours` table. All the data in the column will be lost.
  - You are about to drop the column `balanceHours` on the `User` table. All the data in the column will be lost.
  - Added the required column `date` to the `BankBalanceHours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `BankBalanceHours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankBalanceHours" DROP COLUMN "value",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "balanceHours";
