import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetDateMonthSelectedUseCase } from "./GetDateMonthSelectedUseCase";

class GetDateMonthSelectedController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const { year, month } = request.query as any;

    const getDateMonthSelected = container.resolve(GetDateMonthSelectedUseCase);

    const result = await getDateMonthSelected.execute(year, month, userId);

    return response.json(result);
  }
}

export { GetDateMonthSelectedController };
