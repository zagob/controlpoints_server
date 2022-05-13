import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUsersWithGoogle/CreateUserController";

export const usersRoutes = Router();

const createUser = new CreateUserController();

usersRoutes.post("/create", createUser.handle);
