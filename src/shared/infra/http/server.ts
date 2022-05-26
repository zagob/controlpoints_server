import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";
import "../container";
import cors from "cors";
import { AppError } from "../../errors/AppError";
import { routes } from "./routes/index";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(400).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(process.env.PORT || 3333, () => console.log("Server online..."));
