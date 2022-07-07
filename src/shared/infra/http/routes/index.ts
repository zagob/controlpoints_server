import { Router } from "express";
import { bankBalanceRoutes } from "./bankBalance.routes";
import { pointsRoutes } from "./points.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/points", pointsRoutes);
routes.use("/bankBalance", bankBalanceRoutes);
