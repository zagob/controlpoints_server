-- CreateTable
CREATE TABLE "BankBalanceHours" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BankBalanceHours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankBalanceHours_id_key" ON "BankBalanceHours"("id");

-- AddForeignKey
ALTER TABLE "BankBalanceHours" ADD CONSTRAINT "BankBalanceHours_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
