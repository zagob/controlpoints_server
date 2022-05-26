"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const points_routes_1 = require("./points.routes");
const users_routes_1 = require("./users.routes");
exports.routes = (0, express_1.Router)();
exports.routes.use("/users", users_routes_1.usersRoutes);
exports.routes.use("/points", points_routes_1.pointsRoutes);
//# sourceMappingURL=index.js.map