import { container } from "tsyringe";
import BankBalanceRepository from "../../../modules/bankBalance/infra/prisma/BankBalanceRepository";
import IBankBalanceRepository from "../../../modules/bankBalance/repositories/IBankBalanceRepository";
import { PointsRepository } from "../../../modules/points/infra/prisma/PointsRepository";
import { IPointsRepository } from "../../../modules/points/repositories/IPointsRepository";
import { UsersRepository } from "../../../modules/users/infra/prisma/UsersRepository";
import { IUsersRepository } from "../../../modules/users/repositories/IUsersRepository";

import "./Providers";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPointsRepository>(
  "PointsRepository",
  PointsRepository
);

container.registerSingleton<IBankBalanceRepository>(
  "BankBalanceRepository",
  BankBalanceRepository
);
