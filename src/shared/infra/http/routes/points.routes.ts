import { Router } from "express";
import { CreatePointController } from "../../../../modules/points/useCases/createPoint/CreatePointController";
import { DeletePointWithIdController } from "../../../../modules/points/useCases/deletePointWithId/DeletePointWithIdController";
import { ListAllPointsController } from "../../../../modules/points/useCases/listAllPoints/ListAllPointsController";
import { ListPointDateMonthController } from "../../../../modules/points/useCases/listPointsDateMonth/ListPointDateMonthController";
import { ListPointWithIdController } from "../../../../modules/points/useCases/listPointWithUserId/ListPointWithUserIdController";

export const pointsRoutes = Router();

const createPoint = new CreatePointController();
const listPointDateMonth = new ListPointDateMonthController();
const listAllPoints = new ListAllPointsController();
const listPointWithId = new ListPointWithIdController();
const deletePointWithId = new DeletePointWithIdController();

pointsRoutes.post("/create", createPoint.handle);
pointsRoutes.get("/list/:userId", listPointDateMonth.handle);
pointsRoutes.get("/listAll", listAllPoints.handle);
pointsRoutes.get("/listOne/:id", listPointWithId.handle);
pointsRoutes.delete("/delete/:id", deletePointWithId.handle);
