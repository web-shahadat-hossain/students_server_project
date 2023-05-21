import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
// router
import studentRouter from "./app/modules/students/student.router";

// cors
app.use(cors());

//data parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// student router

app.use("/app/v1/student", studentRouter);

// server running
app.get("/", async (req: Request, res: Response) => {
  res.status(200).send({
    message: "server is running",
  });
});

export default app;
