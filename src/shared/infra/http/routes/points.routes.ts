import { Router } from "express";
import { CreatePointController } from "../../../../modules/points/useCases/createPoint/CreatePointController";
import { ListAllPointsController } from "../../../../modules/points/useCases/listAllPoints/ListAllPointsController";
import { ListPointDateMonthController } from "../../../../modules/points/useCases/listPointsDateMonth/ListPointDateMonthController";

export const pointsRoutes = Router();

const createPoint = new CreatePointController();
const listPointDateMonth = new ListPointDateMonthController();
const listAllPoints = new ListAllPointsController();

pointsRoutes.post("/create", createPoint.handle);
// pointsRoutes.get("/list/:year/:month/:userId", listPointDateMonth.handle);
pointsRoutes.get("/list/:userId", listPointDateMonth.handle);
pointsRoutes.get("/listAll", listAllPoints.handle);
