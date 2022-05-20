import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeletePointWithIdUseCase } from "./DeletePointWithIdUseCase";

class DeletePointWithIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deletePointWithId = container.resolve(DeletePointWithIdUseCase);

    const result = await deletePointWithId.execute(id);

    return response.json(result);
  }
}

export { DeletePointWithIdController };
