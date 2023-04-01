import express from "express";
import cors from "cors";
import "dotenv/config";
import { userRoute } from "./routes/UserRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

const port = process.env.PORT;

app.listen(port, () => console.log(`app listening on port ${port}`));
