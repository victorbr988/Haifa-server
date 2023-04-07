import express from "express";
import cors from "cors";
import "dotenv/config";
import { userRoute } from "./routes/UserRoutes";

export const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);