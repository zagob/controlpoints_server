"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("../../../../modules/users/useCases/createUsersWithGoogle/CreateUserController");
exports.usersRoutes = (0, express_1.Router)();
const createUser = new CreateUserController_1.CreateUserController();
exports.usersRoutes.post("/create", createUser.handle);
//# sourceMappingURL=users.routes.js.map