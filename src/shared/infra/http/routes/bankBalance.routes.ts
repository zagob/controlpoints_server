import { Router } from "express";
import CreateBankBalanceUserController from "../../../../modules/bankBalance/useCases/createBankBalanceUser/CreateBankBalanceUserController";
import ListBankBalanceUserIdController from "../../../../modules/bankBalance/useCases/listBankBalanceUserId/ListBankBalanceUserIdController";
import ListBankBalanceWithDateController from "../../../../modules/bankBalance/useCases/listBankBalanceWithDate/ListBankBalanceWithDateController";
import { verifyExistUser } from "../../../middlewares/verifyExistsUser";

export const bankBalanceRoutes = Router();

const createBankBalanceController = new CreateBankBalanceUserController();
const listBankBalanceController = new ListBankBalanceUserIdController();
const listBankBalanceWithDateController =
  new ListBankBalanceWithDateController();

bankBalanceRoutes.post(
  "/create/:userId",
  verifyExistUser,
  createBankBalanceController.handle
);

bankBalanceRoutes.get(
  "/list/:userId",
  verifyExistUser,
  listBankBalanceController.handle
);

bankBalanceRoutes.get(
  "/getByYear/:userId",
  verifyExistUser,
  listBankBalanceWithDateController.handle
);
