import { Request, Response } from "express";
import { container } from "tsyringe";
import { findDateMonthParams } from "../../repositories/IPointsRepository";
import { ListPointDateMonthUseCase } from "./ListPointDateMonthUseCase";

class ListPointDateMonthController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const { year, month } = request.query as any;

    const listPointsDateMonth = container.resolve(ListPointDateMonthUseCase);

    const result = await listPointsDateMonth.execute({ year, month, userId });

    return response.json(result);
  }
}

export { ListPointDateMonthController };
