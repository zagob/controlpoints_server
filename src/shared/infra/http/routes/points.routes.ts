import { Router } from "express";
import { CreatePointController } from "../../../../modules/points/useCases/createPoint/CreatePointController";
import { ListPointDateMonthController } from "../../../../modules/points/useCases/listPointsDateMonth/ListPointDateMonthController";

export const pointsRoutes = Router();

const createPoint = new CreatePointController();
const listPointDateMonth = new ListPointDateMonthController();

pointsRoutes.post("/create", createPoint.handle);
pointsRoutes.get("/list/:year/:month/:userId", listPointDateMonth.handle);
