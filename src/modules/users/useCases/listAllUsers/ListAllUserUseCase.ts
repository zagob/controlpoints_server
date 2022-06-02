import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../infra/prisma/UsersRepository";

@injectable()
class ListAllUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}
  async execute() {
    const users = await this.usersRepository.listAllUser();

    return users;
  }
}

export { ListAllUserUseCase };
