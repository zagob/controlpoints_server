import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllPointsUseCase } from "./ListAllPointsUseCase";

class ListAllPointsController {
  async handle(request: Request, response: Response) {
    const listAllPoints = container.resolve(ListAllPointsUseCase);

    const result = await listAllPoints.execute();
    
    return response.json(result);
  }
}

export { ListAllPointsController };
