import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUsersWithGoogle/CreateUserController";
import { ListAllUserController } from "../../../../modules/users/useCases/listAllUsers/ListALlUserController";

export const usersRoutes = Router();

const createUser = new CreateUserController();
const listAllUser = new ListAllUserController();

usersRoutes.post("/create", createUser.handle);
usersRoutes.get("/list", listAllUser.handle);
