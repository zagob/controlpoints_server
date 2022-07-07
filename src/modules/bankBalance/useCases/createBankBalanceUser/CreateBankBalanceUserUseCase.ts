import { inject, injectable } from "tsyringe";
import BankBalanceRepository from "../../infra/prisma/BankBalanceRepository";

interface CreateBankBalanceUserUseCaseParams {
  time: string;
  date: Date;
  verifyMinutesPositiveOrNegative: number;
  userId: string;
}

@injectable()
export class CreateBankBalanceUserUseCase {
  constructor(
    @inject("BankBalanceRepository")
    private bankBalanceRepository: BankBalanceRepository
  ) {}

  async execute({
    time,
    date,
    verifyMinutesPositiveOrNegative,
    userId,
  }: CreateBankBalanceUserUseCaseParams) {
    const createBankBalance =
      await this.bankBalanceRepository.createBankBalance(
        time,
        date,
        verifyMinutesPositiveOrNegative,
        userId
      );

    return createBankBalance;
  }
}

export default CreateBankBalanceUserUseCase;
