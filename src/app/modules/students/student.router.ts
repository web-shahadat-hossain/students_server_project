import express from "express";
import { createStudentController } from "./student.controller";

const router = express.Router();

router.post("/", createStudentController);

export default router;
