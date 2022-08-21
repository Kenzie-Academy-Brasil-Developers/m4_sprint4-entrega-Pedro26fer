import express from "express";
import "dotenv/config";
import { startDatabase } from "../src/database/index.js";
import categoryRouter from "./routers/categoryRouter.routes.js";
import prodRouter from "./routers/productRouter.routes.js";



const app = express();

app.use(express.json());

app.use("", categoryRouter);
app.use("", prodRouter)

export default app.listen(3333, () => {
  startDatabase();
});
