import { inject, injectable } from "tsyringe";
import BankBalanceRepository from "../../infra/prisma/BankBalanceRepository";

@injectable()
class ListBankBalanceWithDateUseCase {
  constructor(
    @inject("BankBalanceRepository")
    private bankBalanceRepository: BankBalanceRepository
  ) {}
  async execute(userId: string, year: string) {
    const bankBalanceHours = await this.bankBalanceRepository.getByYear(
      userId,
      year
    );

    return bankBalanceHours;
  }
}

export default ListBankBalanceWithDateUseCase;
