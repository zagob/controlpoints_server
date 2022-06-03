import { container } from "tsyringe";
import { PointsRepository } from "../../../modules/points/infra/prisma/PointsRepository";
import { IPointsRepository } from "../../../modules/points/repositories/IPointsRepository";
import { UsersRepository } from "../../../modules/users/infra/prisma/UsersRepository";
import { IUsersRepository } from "../../../modules/users/repositories/IUsersRepository";

import './Providers'

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPointsRepository>(
  "PointsRepository",
  PointsRepository
);
