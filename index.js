import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/tasks", taskRoutes)

app.listen(8080)


