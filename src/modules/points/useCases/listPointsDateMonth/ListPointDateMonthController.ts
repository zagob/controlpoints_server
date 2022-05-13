import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPointDateMonthUseCase } from "./ListPointDateMonthUseCase";

class ListPointDateMonthController {
  async handle(request: Request, response: Response) {
    const { year, month, userId } = request.params;

    const listPointsDateMonth = container.resolve(ListPointDateMonthUseCase);

    const result = await listPointsDateMonth.execute(year, month, userId);

    return response.json(result);
  }
}

export { ListPointDateMonthController };
