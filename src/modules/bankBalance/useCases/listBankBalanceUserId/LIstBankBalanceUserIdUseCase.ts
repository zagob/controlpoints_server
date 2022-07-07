import { inject, injectable } from "tsyringe";
import BankBalanceRepository from "../../infra/prisma/BankBalanceRepository";

@injectable()
class ListBankBalanceUserIdUseCase {
  constructor(
    @inject("BankBalanceRepository")
    private bankBalanceRepository: BankBalanceRepository
  ) {}
  async execute(userId: string) {
    const bankBalanceHours =
      await this.bankBalanceRepository.listBankBalanceUserId(userId);

    return bankBalanceHours;
  }
}

export default ListBankBalanceUserIdUseCase;
