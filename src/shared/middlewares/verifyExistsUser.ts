import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../../modules/users/infra/prisma/UsersRepository";
import { AppError } from "../errors/AppError";

export async function verifyExistUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { userId } = request.params;
  console.log(userId)
  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(userId);

  if (!user) {
    throw new AppError("User is not find");
  }

  return next();
}
