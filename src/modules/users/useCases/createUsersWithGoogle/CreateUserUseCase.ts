import { inject, injectable } from "tsyringe";
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
      return null;
    }

    const createUser = await this.usersRepository.create({ id, image, name });

    return createUser;
  }
}
