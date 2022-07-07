import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateBankBalanceUserUseCase from "./CreateBankBalanceUserUseCase";

export class CreateBankBalanceUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const { time, verifyMinutesPositiveOrNegative, date } = request.body;

    const createBankBalance = container.resolve(CreateBankBalanceUserUseCase);

    const result = await createBankBalance.execute({
      time,
      date,
      userId,
      verifyMinutesPositiveOrNegative,
    });

    return response.status(201).json(result);
  }
}

export default CreateBankBalanceUserController;
