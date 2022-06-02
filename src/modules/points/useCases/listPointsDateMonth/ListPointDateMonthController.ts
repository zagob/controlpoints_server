import { Request, Response } from "express";
import { container } from "tsyringe";
import { findDateMonthParams } from "../../repositories/IPointsRepository";
import { ListPointDateMonthUseCase } from "./ListPointDateMonthUseCase";

interface IRequestQuery {
  year: string;
  month: string;
}

class ListPointDateMonthController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const year = request.query.year as string;
    const month = request.query.month as string;

    const listPointsDateMonth = container.resolve(ListPointDateMonthUseCase);

    const result = await listPointsDateMonth.execute({
      year,
      month,
      userId,
    });

    return response.json(result);
  }
}

export { ListPointDateMonthController };
