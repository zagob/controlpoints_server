import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<ICreateUserDTO>;
  findById(id: string): Promise<User | null>;
}

export { IUsersRepository };
