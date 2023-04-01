import express from "express";
import UserController from "../controller/UserController";

export const userRoute: express.Router = express.Router();

userRoute.post("/new", UserController.create);
