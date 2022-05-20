import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPointWithIdUseCase } from "./ListPointWithUserIdUseCase";

class ListPointWithIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listPointWithId = container.resolve(ListPointWithIdUseCase);

    const result = await listPointWithId.execute(id);

    return response.json(result);
  }
}

export { ListPointWithIdController };
