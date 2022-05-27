import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ id, image, name }: ICreateUserDTO): Promise<ICreateUserDTO> {
    // const user = new User(id, image, name)

    Object.assign(
      {},
      {
        id,
        image,
        name,
      }
    );

    this.users.push({ id, image, name });

    return { id, image, name };
  }
  async findById(id: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }
}

export { UsersRepositoryInMemory };
