import { Router } from "express";
import { pointsRoutes } from "./points.routes";
import { usersRoutes } from "./users.routes";

export const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/points", pointsRoutes);
