import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePointUseCase } from "./CreatePointUseCase";

class CreatePointController {
  async handle(request: Request, response: Response) {
    const { userId, selectedDate, entryOne, exitOne, entryTwo, exitTwo } =
      request.body;

    const createPointsUseCase = container.resolve(CreatePointUseCase);

    const result = await createPointsUseCase.execute({
      userId,
      selectedDate,
      entryOne,
      exitOne,
      entryTwo,
      exitTwo,
    });

    return response.json(result);
  }
}

export { CreatePointController };
