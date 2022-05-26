"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const PointsRepository_1 = require("../../../modules/points/infra/prisma/PointsRepository");
const UsersRepository_1 = require("../../../modules/users/infra/prisma/UsersRepository");
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("PointsRepository", PointsRepository_1.PointsRepository);
//# sourceMappingURL=index.js.map