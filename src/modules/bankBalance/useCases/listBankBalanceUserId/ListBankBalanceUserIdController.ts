import { Request, Response } from "express";
import { container } from "tsyringe";
import ListBankBalanceUserIdUseCase from "./LIstBankBalanceUserIdUseCase";

class ListBankBalanceUserIdController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const bankBalanceHours = container.resolve(
      ListBankBalanceUserIdUseCase
    );

    const result = await bankBalanceHours.execute(userId);

    return response.status(200).json(result);
  }
}

export default ListBankBalanceUserIdController;
