import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUserUseCase } from "./ListAllUserUseCase";

class ListAllUserController {
  async handle(request: Request, response: Response) {
    const listAllUsersUseCase = container.resolve(ListAllUserUseCase);

    const users = await listAllUsersUseCase.execute();

    return response.json(users);
  }
}

export { ListAllUserController };
