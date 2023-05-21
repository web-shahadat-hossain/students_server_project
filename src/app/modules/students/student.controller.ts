import { Request, Response } from "express";
import { createStudentsServices } from "./students.services";

export const createStudentController = async (req: Request, res: Response) => {
  const data = await createStudentsServices(req.body);
  res.status(200).send({
    status: "successfully",
    data: data,
  });
};
