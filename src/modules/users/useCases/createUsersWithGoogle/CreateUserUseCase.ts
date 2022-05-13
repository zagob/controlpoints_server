import { inject, injectable } from "tsyringe";
import { prisma } from "../../../../infra/database/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ICreateUser {
  id: string;
  name: string;
  image: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ id, image, name }: ICreateUser): Promise<ICreateUser | null> {
    const userExists = await this.usersRepository.findById(id);

    if (userExists) {
      console.log('existe')
      return null
    }

    const createUser = await this.usersRepository.create({ id, image, name });

    return createUser;
  }
}
