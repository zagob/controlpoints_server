import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";
import "reflect-metadata";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UsersRepositoryInMemory;

describe("Create user", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = {
      id: "id test",
      image: "image test",
      name: "name test",
    };

    const userAlreadyExists = await userRepositoryInMemory.findById("id test");
    await createUserUseCase.execute({
      id: user.id,
      image: user.image,
      name: user.name,
    });

    const userCreated = await userRepositoryInMemory.create(user);

    expect(userCreated).toEqual(user);
    expect(userAlreadyExists).toBeUndefined();
  });

  it("should be able to exist same user", async () => {
    const user = {
      id: "id test",
      image: "image test",
      name: "name test",
    };

    await createUserUseCase.execute({
      id: user.id,
      image: user.image,
      name: user.name,
    });

    const userAlreadyExists = await userRepositoryInMemory.findById("id test");

    const userCreated = await userRepositoryInMemory.create(user);

    expect(userCreated).toEqual(user);
    expect(userAlreadyExists).toBeTruthy();
  });
});
