import { BankBalanceHours } from "@prisma/client";
import dayjs from "dayjs";
import { prisma } from "../../../../infra/database/prismaClient";
import IBankBalanceRepository from "../../repositories/IBankBalanceRepository";

class BankBalanceRepository implements IBankBalanceRepository {
  async createBankBalance(
    time: string,
    date: Date,
    verifyMinutesPositiveOrNegative: number,
    userId: string
  ): Promise<BankBalanceHours> {
    const createBankBalance = await prisma.bankBalanceHours.create({
      data: {
        time,
        verifyMinutesPositiveOrNegative,
        date,
        userId,
      },
    });

    return createBankBalance;
  }

  async listBankBalanceUserId(userId: string): Promise<BankBalanceHours[]> {
    const bankBalanceHours = await prisma.bankBalanceHours.findMany({
      where: {
        userId,
      },
    });

    return bankBalanceHours;
  }

  async getByYear(userId: string, year: string): Promise<BankBalanceHours[]> {
    const numberYear = Number(year);

    const listDateMonthSelected = await prisma.bankBalanceHours.findMany({
      where: {
        userId: userId,
        date: {
          gte: dayjs().year(numberYear).month(0).date(31).format(),
          lte: dayjs().year(numberYear).month(11).date(31).format(),
        },
      },
    });

    return listDateMonthSelected;
  }
}

export default BankBalanceRepository;
