import { User } from "@prisma/client";
import { prisma } from "../../../../infra/database/prismaClient";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  async create({ id, image, name }: ICreateUserDTO): Promise<ICreateUserDTO> {
    const createUser = await prisma.user.create({
      data: {
        id,
        image,
        name,
      },
    });

    return createUser;
  }

  async findById(id: string): Promise<User | null> {
    const findByIdUser = await prisma.user.findFirst({
      where: {
        id: {
          equals: id,
          mode: "insensitive",
        },
      },
    });

    return findByIdUser;
  }
}

export { UsersRepository };
