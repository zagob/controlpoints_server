import { BankBalanceHours } from "@prisma/client";

interface IBankBalanceRepository {
  createBankBalance(
    time: string,
    date: Date,
    verifyMinutesPositiveOrNegative: number,
    userId: string
  ): Promise<BankBalanceHours>;
  listBankBalanceUserId(userId: string): Promise<BankBalanceHours[]>;
  getByYear(userId: string, year: string): Promise<BankBalanceHours[]>;
}

export default IBankBalanceRepository;
