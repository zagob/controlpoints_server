import { Request, Response } from "express";
import { container } from "tsyringe";
import ListBankBalanceWithDateUseCase from "./ListBankBalanceWithDateUseCase";

class ListBankBalanceWithDateController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const { year } = request.query as any;

    const bankBalanceHoursWithDate = container.resolve(
      ListBankBalanceWithDateUseCase
    );

    const result = await bankBalanceHoursWithDate.execute(userId, year);

    return response.status(200).json(result);
  }
}

export default ListBankBalanceWithDateController;
