"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
require("express-async-errors");
require("../container");
const cors_1 = __importDefault(require("cors"));
const AppError_1 = require("../../errors/AppError");
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(index_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(400).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});
app.listen(process.env.PORT || 3333, () => console.log("Server online..."));
//# sourceMappingURL=server.js.map