import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { id, name, image } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const result = await createUserUseCase.execute({
      id,
      name,
      image,
    });

    return response.json(result);
  }
}
