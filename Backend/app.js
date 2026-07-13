import express from "express";
import cors from "cors";

import expenseRoutes from "./routes/expense.routes.js";

const app = express();

//app.use(cors());// for developememnt only
app.use(
  cors({
    origin: "https://traxpense-1.onrender.com",
  })
);

app.use(express.json());

app.use("/api/expenses", expenseRoutes);

export default app;
